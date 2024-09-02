import React from 'react';
import './Sidebar.css';
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";



function Sidebar(){
    return(
        <div>
            <div className="sidebar">
            <div className="logo">
                <GrMenu />
            </div>
            <div className="icons">
                <GoHomeFill />
                <h2>Home</h2>
            </div>
            <div className="icons">
                <SiYoutubeshorts />
                <h2>Shorts</h2>
            </div>
            <div className="icons">
                <MdSubscriptions />                
                <h2>Subscriptions</h2>
            </div>
            <div className="icons">
                <FaPlay />
                <h2>You</h2>
            </div>
            </div>
        </div>
    );
}

export default Sidebar;