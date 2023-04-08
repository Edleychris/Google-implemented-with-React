import React from 'react';
import {BsGrid3X3GapFill} from 'react-icons/bs';
import img1 from './Images/Google profile.jpg';
import './google.css'

function Navbar() {
  return (
    <>
    <div className='navbar'>
        <ul>
            <li>Gmail</li>
            <li>Images</li>
            <li><BsGrid3X3GapFill/></li>
            <li><img src={img1} alt="profile"/></li>
        </ul>
    </div>
    </>
  )
}

export default Navbar