import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
        <nav class="bg-blue-600 text-white p-4 flex items-center">
            <h5 className="text-xl flex-grow">product-App</h5>
           
            <Link to="/home">
            <button class="bg-white text-blue-600
                px-2 py-1 mx-3 rounded">home</button>
            </Link>


            <Link to="/add">
            <button class="bg-white text-blue-600
                px-2 py-1 mx-3 rounded">add</button>
            </Link>


            <Link to="/view">
            <button class="bg-white text-blue-600
                px-2 py-1 mx-3 rounded">view</button>
            </Link>


        </nav>
    </div>
  )
}


export default NavBar
