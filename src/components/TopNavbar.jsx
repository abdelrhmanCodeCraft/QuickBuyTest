import React from 'react'
import '../style/components/topNavbar.css'
import { BiArrowToBottom } from "react-icons/bi";
import { Link } from 'react-router-dom';


const TopNavbar = () => {
  return (
    <div>
      <div className="topBar">
        <div className="container">
            <div className="room room-one">
                <p> <Link to='/about'>about us</Link> </p>
                <span className='line'></span>
                <p><Link>my account</Link></p>
                <span className='line'></span>
                <p><Link>wishlist</Link></p>
                <span className='line'></span>
                <p><Link>order tracking</Link></p>
            </div>
            <div className="room room-tow">
                <p>100% Secure delivery without contacting the courier</p>
            </div>
            <div className="room room-three">
                <p>Need help? Call Us: <span>+ 2144 600</span> </p>
                <span className='line'></span>
                <div class="dropdown">
                    <button class="dropbtn">english <BiArrowToBottom /></button>
                    <div class="dropdown-content">
                        <a href="#"> French</a>
                        <a href="#"> German</a>
                        <a href="#"> Russian</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TopNavbar
