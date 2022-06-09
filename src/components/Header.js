import React, { useRef } from "react";
import { NavLink} from "react-router-dom";
import HomeButton from './HomeButton';
import "./Header.css";
import NavButton from "./NavButton";
import { LoggedInContext } from "../App";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";



function Header(){
    const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);

    const usernameRef = useRef();
    
    return(
        <div>

            {/* <div>
                <HomeButton />
            </div> */}
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
             <div>
                {isLoggedIn ? "Welcome" : ""}
                {/* {isLoggedIn ? <LogoutButton/> : <div><LoginForm /><RegisterForm /></div>}  */}
                {isLoggedIn ? <LogoutButton/> 
                            : <div>
                                <LoginButton to="/LoginForm"/>
                                <RegisterButton to="/RegisterForm"/>
                             </div>
                } 

            </div>
        </div>    
    );
}

export default Header;