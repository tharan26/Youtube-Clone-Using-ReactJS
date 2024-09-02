import React from "react";
import './Header.css';
import logo from './Assets/Logo.png';
import { FaMicrophone } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiSolidVideoPlus } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

function Header(){
    return(
        <header>
        <div className="title">
            <div className="logo">
            <img src={logo}/>
            </div>
            <p>Youtube</p>
        </div>
        <div className="search">
            <input type="search" placeholder="Search"/>
            <FaMicrophone className="mic" />
        </div>
        <div className="user">
            <BiSolidVideoPlus className="add"/>
            <IoIosNotificationsOutline className="bell"/>
            <FaUserCircle className="pro"/>
        </div>
        </header>
    )
}

export default Header;