import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Search({cards, onSearch}) {
  const [query, setQuery] = useState("");
  const [sugg, setSugg] = useState(true);
  

  const filteredCards = cards && cards.filter(card =>
    card.title.toLowerCase().includes(query.toLowerCase())
  );
  const handleClick = () => {
    onSearch(filteredCards); 
    console.log(filteredCards)
  };

  const handleSearchClick = (title) => {
    setQuery(title);  
    setSugg(false);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    setSugg(true);  
  };



  return (
    <div className='bg-indigo-200/70'>
      <div className='flex flex-col items-center justify-center  min-h-96 '>
        <h1 className='font-nine  font-medium text-4xl md:text-6xl lg:text-7xl'>How can we help?</h1>
        
        <div className='flex bg-white cursor-pointer justify-between items-center w-2/3 lg:w-1/2 border-2 rounded-lg border-black shadow-md shadow-black/20 h-12  md:h-16'>
        <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleChange}
        className="text-[18px] md:text-[24px] h-12 placeholder:font-fourth ml-4 md:ml-8 w-[70%] md:w-[80%] lg:w-[90%] focus:outline-none font-nine bg-transparent border-0" 
      />
        <FaArrowRight onClick={handleClick} className='h-full w-[50px] md:w-auto p-2 lg:p-3 hover:bg-black hover:text-white flex items-end justify-end transition ease-in-out duration-500' />
        </div>
        {query && sugg &&
        <ul className='w-[300px] absolute top-[300px] md:top-[330px] md:w-[650px] lg:w-[750px]'>
        {filteredCards.map((card, index) => (
          <li key={index} onClick={() => handleSearchClick(card.title)}   className='text-[14px]  md:text-[20px] border-2 border-slate-700 p-2 bg-white  hover:bg-black hover:text-white transition ease-in-out duration-300 rounded-lg cursor-pointer'>{card.title}</li>
        ))
}
      </ul>
}
      </div>
    </div>
  )
}

export default Search