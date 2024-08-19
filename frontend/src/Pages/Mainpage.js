import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from '../Components/Header'
import Search from '../Components/Search'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'

function Mainpage() {

    const [cards, setCards] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get("http://localhost:5000/cards");
          setCards(res.data);
        } catch (err) {
          console.error(err); 
        }
      };
  
      fetchData();
    }, []);

    const [filteredCards, setFilteredCards] = useState(cards);

    const handleSearch = (filtered) => {
      setFilteredCards(filtered);
    };

  return (
    <div>
      <Header />
      <Search cards={cards} onSearch={handleSearch}  />
      <Cards cards={cards} filteredcards={filteredCards} />
      <Footer />
    </div>
  )
}

export default Mainpage