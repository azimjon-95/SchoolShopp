import React from 'react';
import './style.css';
import logo from '../../assets/logo-header.png'
import { FaUser, FaCartShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { GrBottomCorner } from "react-icons/gr";

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-top'>
                <div className="nav-logo">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="link-seach">
                    <input type="text" name="" placeholder='Search for products brands and more' />
                    <IoSearch />
                </div>
                <div className="link-bar">
                    <button><FaCartShopping />
                        <p>0</p>
                    </button>
                    <button>   <FaUser /></button>
                </div>

            </div>
            <div className='navbar-bottom'>
                <button>Home</button>
                <button>Study Material Kit<GrBottomCorner /></button>
                <button>Notebooks</button>
                <button>Uniforms<GrBottomCorner /></button>
                <button>Stationery</button>
            </div>
        </div>
    )

}

export default Navbar