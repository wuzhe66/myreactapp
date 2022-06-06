import { useNavigate } from "react-router-dom";
import React from "react";

function HomeButton(){

    const navigate = useNavigate();

    const handleNavigate = ()  => {
        navigate("/");
    }

// return <button onClick={handleNavigate}>Home</button>

return(
    <div style={{ flexDirection: "row", direction: "rtl" }}>
      <button onClick={handleNavigate}>Home</button>
    </div>
)

}

export default HomeButton;