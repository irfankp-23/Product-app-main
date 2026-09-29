import axios from 'axios'
import React, { useState } from 'react'


const ProductApi = () => {


    var[product,setproduct]=useState([])
const [fullImage, setFullImage] = useState(null);

    axios.get("http://localhost:3000/view")
    .then((res)=>{
      console.log(res.data)  
      setproduct(res.data)
    })


  return (
    <div>
        <h1> Clipcart </h1>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">


    {product.map((val)=>{
        return(
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-hidden">
      <img
  src={val.Image}
  alt=""
  className="w-full h-48 object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
  onClick={() => setFullImage(val.Image)}
/>
</div>
          <div>
            <h2 className="text-lg font-bold !text-gray-400">
              {val.Name}
            </h2>
          

            <p className="text-gray-500 mt-2">
              {val.Disc}
            </p>


            <p className="text-green-600 font-bold text-lg mt-3">
             RS: {val.price}
            </p>


            <button className="bg-blue-600 text-white py-2 mt-3 p-3 rounded hover:bg-green-700">
            buyNow
            </button>
          </div>
          {/* card closing */}
          </div>
    )


    })}


       {/* grid closing    */}
        </div>
{fullImage && (
  <div 
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
    onClick={() => setFullImage(null)}
  >
    <img 
      src={fullImage} 
      alt="Full screen" 
      className="max-w-4xl max-h-[90vh] object-contain rounded-lg" 
    />
  </div>
)}

       
    </div>
  )
}


export default ProductApi


