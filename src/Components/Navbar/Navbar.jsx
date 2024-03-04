import React from 'react'
import logo from '../Assets/logo.png'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import icon1 from '../Assets/icon1.png'
import icon2 from '../Assets/icon2.png'
import icon3 from '../Assets/icon3.png'
import icon4 from '../Assets/icon4.png'
import icon5 from '../Assets/icon5.png'
import icon6 from '../Assets/icon6.png'

const Navbar = () => {
    return (
   <> 
    <div className='navbar'>
             <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
           
           
     <div className="search-box">
      <input type="text" placeholder="Search etc..." />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
     </div>
            
             


           <div className="nav-start">
             <button>Get started</button>
            </div>
</div>   
{/* // closing of uppernavbar */}

<div className='hero'>
            
            <div className='box'> 
               <div className="item" ><img src={icon1}alt=""/></div>
                <div className="item"><img src={icon2}alt=""/></div>
                <div className="item"><img src={icon3}alt=""/></div>
                <div className="item"><img src={icon4}alt=""/></div>
                <div className="item"><img src={icon5}alt=""/></div>
                
               <div className="item"><img src={icon6}alt=""/></div>    
            </div>
</div>
</>




    )
}

export default Navbar;
