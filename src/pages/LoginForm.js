import React, { useRef } from "react";
import { LoggedInContext } from "../App";


function LoginForm() {

  //写这句话就可以用  LoggedInContext
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);


   const usernameRef = useRef();
   const passwordRef = useRef();

   const handleSubmit = (event) => {
       event.preventDefault(); // prevent page reload

       // to fill in based on callPostBody

       fetch("http://localhost:3002/users/login", {
        method: "POST",
        body: JSON.stringify({
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        }),
        headers: {
          "Content-type": "application/json;charset=utf-8",
        },
      })
        .then((data) => data.json())
        .then((json) => {
          json.success ? alert("You're Logged in") : alert("wrong wrong");
          json.success ? setIsLoggedIn(true) : setIsLoggedIn(false);
        })

   }

   return (
    <form onSubmit={handleSubmit}>
      <div>Please Login</div>
      
      <label htmlFor="username">Username</label>
      <input id="username" type="text" ref={usernameRef}  />

      <label htmlFor="password">Password</label>
      <input id="password" type="password" ref={passwordRef}  />
      <button type="submit">Login Submit</button>
    </form>
  );
}

export default LoginForm;