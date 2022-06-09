// import logo from './logo.svg';
// import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Route, Routes, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import React from 'react';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';

//import了就不用写React.

export const LoggedInContext = React.createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});



function App(){

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const loggedInValueToProvide = [isLoggedIn, setIsLoggedIn]; // So we can pass down both value and setter

  return (
    <div>
      <LoggedInContext.Provider value={loggedInValueToProvide}>
        <Routes>
          <Route path = "/" element = {<MainLayout />}  >

            <Route index element = {isLoggedIn ? <Home />:<div></div> }  />
            <Route path = "about" element = {<About />}  />
            <Route path = "contact" element = {<Contact />}  />
            <Route path = "LoginForm" element = {<LoginForm />}  />
            <Route path = "RegisterForm" element = {<RegisterForm />}  />

          </Route>
          <Route path="*" element={<Navigate to="/" /> }  />   
      </Routes>
      </LoggedInContext.Provider>
    </div>
  );
}

export default App;



