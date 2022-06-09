import React, { useRef } from 'react';

function RegisterForm(){


    
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleRegister = (event) =>{
        event.preventDefault();

        //方法
        fetch("http://localhost:3002/users/register", {
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
                json.success ? alert("You're Registered!") : alert("Wrong Registered");
              })    
      }

return(
    <form onSubmit = {handleRegister} >
        <div>Please Register</div>
        <label htmlFor='username'>Username</label>
        <input id="username" type="text" ref={usernameRef} required />

        <label htmlFor='password'>Password</label>
        <input id='password' type="password" ref={passwordRef} required />

        <button type="submit">Register Submit</button>
    </form>
);

}

export default RegisterForm;