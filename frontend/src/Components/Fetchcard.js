import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { InfinitySpin} from 'react-loader-spinner'

function Fetchcard (){
  const [card, setCard] = useState(null);
  const [error, setError] = useState('');
  const { title } = useParams();

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/cards/${title}`);
        setCard(res.data);
      } catch (err) {
        setError('Failed to fetch card details');
      }
    };

    fetchCard();
  }, [title]);

  return (
    < div className='bg-indigo-100 pb-20'>
  <div className="App flex flex-col items-center m-4 m:m-0 pt-10 ">
    <h1 className='font-bold font-nine text-[20px] pb-8'> Details of the Card</h1>
    {card ? (
   < div className=' border-2 border-gray-900  rounded-xl shadow-xl bg-white shadow-gray-500 gap-2 '>

     <h1 className=' border-b-2 border-black p-4 font-nine font-bold' htmlFor='title'> {card.title}  </h1>

   <div className=' flex flex-col items-start p-4'>
   <h2 className=' font-medium font-nine  ' htmlFor='desc'> {card.description}  </h2>
   </div>
  
  </div>
    ): <div className="z-10  flex justify-center items-center">
    <InfinitySpin color="#9187e6" />
   </div>
    }


  </div>
  </div>
  
);
};

export default Fetchcard;
