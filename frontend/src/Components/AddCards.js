import React, { useState } from 'react'
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function AddCards() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
 
    const [loading, setLoading] = useState(false);

    const toastOptions= {
      position:"top-center",
      autoClose:5000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
  }

    const handleSubmit = async(event) => {
      event.preventDefault();
      setLoading(true);
      const data = {
        title,
        description
      };
      
          try {
            
            const res = await axios.post('http://localhost:5000/cards', data);
            console.log(res.data);

            toast.success('Card Added Successfully', toastOptions)
            setTitle('');
            setDescription('');     
            
          } catch (err) {
            console.error(err);
          } finally {
            setLoading(false); 
          }      
    
    };


  
    return (
        < div className='bg-indigo-100 pb-10'>
      <div className="App flex flex-col items-center m-4 m:m-0 pt-10 ">
        <h1 className='font-bold font-nine text-[20px] pb-8'> Submit Your Request</h1>
        
       <div className=' border-2 border-gray-900 p-10 rounded-xl shadow-xl bg-white shadow-gray-500  '>

       <form onSubmit={handleSubmit}  className=''>
        <div className=' flex flex-col items-start '>
          <label className=' font-medium font-nine' htmlFor='title'> Title  </label>
          <input  id='title' type='text' value={title} className='border-2 font-nine border-gray-300 bg-transparent rounded-lg w-full shadow-lg p-2 hover:border-black hover:shadow-black/40 outline-none focus:border-black transition duration-500' onChange={(e)=>setTitle(e.target.value)} required></input>
        </div>

        <div className='mt-4 flex flex-col items-start '>
        <label className=' font-medium font-nine  ' htmlFor='desc'> Description  </label>
          <textarea  id='desc' type='text' value={description}  className='border-2 font-nine border-gray-300 bg-transparent rounded-lg w-full h-24 shadow-lg p-2 hover:border-black hover:shadow-black/40 outline-none focus:border-black transition duration-500'  onChange={(e)=> setDescription(e.target.value) } required></textarea>
        </div>

  
        <button className=' mt-8 p-2 border-2 shadow-lg shadow-black/40 border-black font-semibold rounded-lg hover:bg-white bg-black text-white hover:text-black hover:shadow-xl hover:shadow-gray-500 transition duration-500' type="submit"> Submit Request</button>
       </form>
       </div>

       {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800/30 z-50">
          <div className="w-16 h-16 border-t-4 border-black border-solid rounded-full animate-spin"></div>
        </div>
      )}

      <ToastContainer />

      </div>
      </div>
      
    );
}

export default AddCards