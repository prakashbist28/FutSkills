import React from "react";
import { InfinitySpin} from 'react-loader-spinner'
import { Link } from "react-router-dom";


function Cards({cards, filteredcards}) {

  

  return (
    <>
    {filteredcards && <div className=" flex items-center justify-center pt-10 font-nine font-semibold"> The following are the search results</div>}
    <div className="min-h-96 mt-10 flex items-center justify-center mb-10">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {filteredcards  ? (
          filteredcards.map((fcard) => (
            <Link
              key={fcard._id}
              to={`/card/${fcard.title}`}
              className="group border-2 cursor-pointer border-slate-300 w-full bg-slate-100 hover:bg-indigo-200/50 hover:shadow-lg hover:border-black hover:shadow-black/20 hover:-translate-y-2 transition duration-300 min-h-40 max-w-xs rounded-2xl"
            >
              
              <h1 className="border-b-2 group-hover:border-black font-nine font-bold border-slate-300 p-2 transition ease-in-out duration-300">
                {fcard.title}
              </h1>
              <p className="p-2 font-nine overflow-hidden">
                {fcard.description}
              </p>
            </Link>
          ))
        ) :  cards ? (
          cards.map((card) => (
            <Link
              key={card._id}
              to={`/card/${card.title}`}
              className="group border-2 cursor-pointer border-slate-300 w-full bg-slate-100 hover:bg-indigo-200/50 hover:shadow-lg hover:border-black hover:shadow-black/20 hover:-translate-y-2 transition duration-300 min-h-40 max-w-xs rounded-2xl"
            >
              <h1 className="border-b-2 group-hover:border-black font-nine font-bold border-slate-300 p-2 transition ease-in-out duration-300">
                {card.title}
              </h1>
              <p className="p-2 font-nine overflow-hidden">
                {card.description}
              </p>
            </Link>
          ))
        ) : (
          <div className="z-10  flex justify-center items-center">
            <InfinitySpin color="#9187e6" />
          </div>
        )}
      </div>
    </div>
    </>
  );
        }
export default Cards;
