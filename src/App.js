// import logo from './logo.svg';
// import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Navigate } from 'react-router-dom';


function App(){

    return (
      <div>
        <Routes>
          <Route path = "/" element = {<MainLayout />}  >
            <Route index element = {<Home />}  />
            <Route path = "about" element = {<About />}  />
            <Route path = "contact" element = {<Contact />}  />
          </Route>
          <Route path="*" element={<Navigate to="/" /> }  />  
      </Routes>
      </div>
    );


  }


export default App;


