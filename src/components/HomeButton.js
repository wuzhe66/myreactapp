import { useNavigate } from "react-router-dom";
import React from "react";
// import { Button } from "react-bootstrap";
import Button from "@mui/material/Button";

function HomeButton(){

    const navigate = useNavigate();

    const handleNavigate = ()  => {
        navigate("/");
    }

// return <button onClick={handleNavigate}>Home</button>

return(
    <div style={{ flexDirection: "row", direction: "rtl" }}>
      {/* <Button variant="primary" onClick={handleNavigate}>Home BootStrap</Button> */}

      <Button variant="contained" color="primary" onClick={handleNavigate}>Home Mui</Button>

    </div>
)

}

export default HomeButton;