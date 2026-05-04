import React from 'react';
import navImg from  './../../assets/logo.png'
import dollerImg from './../../assets/dollar1.png'

const Navbar = ({availableBalance}) => {
    return (
        <div className='p-2 m-2'>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <a>
      <img className='h-10 w-10' src={navImg} alt="Navber-Image" />
    </a>
  </div>


  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a> Home </a></li>
      <li><a> Fixture </a></li>
      <li><a> Teams </a></li>
      <li><a> schedule </a></li>
     </ul>


  <div>
    <div className='flex items-center gap-2 border border-gray-300 rounded  px-4 py-2 ' >
    <span className="font-bold"  >{availableBalance} USD </span>
    <img className='h-5 w-5'  src={dollerImg} alt="doller" />
      
  </div>
    </div>    
  </div>
  
</div>
        </div>
    );
};

export default Navbar;