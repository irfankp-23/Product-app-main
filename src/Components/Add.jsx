import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


const Add = () => {
  var[product,setproduct]=useState({Name:"",Disc:"",price:"",Image:""})
  var navigate=useNavigate()
  var location=useLocation()


  console.log(location.state)


  const inputHandler=(e)=>{
    setproduct({...product,[e.target.name]: e.target.value})
    console.log(product)
  }






  const addproduct=()=>{


    if(location.state !==null){
      //update
      axios.put("http://localhost:3000/edit/"+location.state._id,product)
      .then((res)=>{
      alert(res.data)
      navigate("/view")
    })
    }
    else{
      //add
      axios.post("http://localhost:3000/add",product)
      .then((res)=>{
      alert(res.data)
      navigate("/view")
    })
    }
   
  }


  // useEffect(()=>{},[])


   useEffect(()=>{
             if(location.state!==null){
            setproduct({...product,
                Name:location.state.Name,
                Image:location.state.Image,
                price:location.state.price,
                Disc:location.state.Disc,
            }
            )
        }
        },[])


  return (
    <div class="flex flex-col items-center p-10 space-y-4">
        <h3>add page</h3>
        <input class='rounded outline p-2'  type="text" placeholder='Product name'
        name="Name" value={product.Name} onChange={inputHandler}/>


        <input class='rounded outline p-2'  type="text" placeholder='Product price'
        name="price" value={product.price} onChange={inputHandler} />


        <input class='rounded outline p-2'  type="text" placeholder='Product img link'
        name="Image" value={product.Image} onChange={inputHandler} />


        <input class='rounded outline p-2'  type="text" placeholder='Product disc'
        name="Disc" value={product.Disc} onChange={inputHandler}  />


        <button class="bg-blue-600 text-white py-2 mt-3 p-3 rounded hover:bg-green-700"
        onClick={addproduct}>
            Submit
        </button>
    </div>
  )
}


export default Add
