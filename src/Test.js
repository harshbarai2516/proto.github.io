import React from "react";
import "./Test.css";
import { Link } from 'react-router-dom';
import SidebarData from "./SidebarData.js";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CloseIcon from '@material-ui/icons/Close';
import  { useState } from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';


function Test() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {setSidebar(!sidebar)};
  return (
    <div className="navbar">
        <div className="navbutton">     
          <Link to="#" className="nav__icon">
            < FastfoodIcon className="nav__icon" onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                < CloseIcon />
              </Link>
            </li>
            <br/><br/>
               <div className="display__photo">
                 <img
                 className="photo"
                 src="https://i.ibb.co/dr4f1Ty/bhnhlogo.jpg" 
                 alt=""/>
                </div>
              
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <div className="nav-text">
              <a href="https://instagram.com/bhook_ho_na_ho?igshid=kaqczpmuvzl5" className="nav-text"  ><InstagramIcon  />  <span>Follow US</span></a>
            </div>
          </ul>
        </nav>
    </div>

  );
}

export default Test;
