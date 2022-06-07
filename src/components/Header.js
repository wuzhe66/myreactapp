import React from "react";
import { NavLink} from "react-router-dom";
import HomeButton from './HomeButton';
import "./Header.css";
import NavButton from "./NavButton";

function Header(){

    return(
        <div>
            <div>
                <HomeButton />
            </div>
            <div>
                <NavButton to="/"  />
                <NavLink 
                    to="/about" 
                    className={({ isActive }) =>
                    isActive ? "link-active" : "link-inactive"    //{ color: "orange" } : { color: "blue" }
                    }
                >
                    About
                </NavLink>
                <NavLink 
                    to="/contact"          
                    className={({ isActive }) =>
                    isActive ? "link-active" : "link-inactive"       
                    }
                >Contact
                </NavLink>
             </div>      
        </div>    
    );
}

export default Header;