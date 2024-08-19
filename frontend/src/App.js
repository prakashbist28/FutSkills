import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Mainpage from "./Pages/Mainpage";
import Fetchcardpg from "./Pages/Fetchcardpg";
import Addcardspage from "./Pages/Addcardspage";

function App() {


  return (
    <div className=" min-h-screen">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/card/:title" element={<Fetchcardpg />} />
          <Route path="/addcard" element={<Addcardspage />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
