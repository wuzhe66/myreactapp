import React from "react";

function DbData() {
  return (
    <div>
      <button onClick={callGetAll}>Get all users</button>

      <button onClick={callPostBody}>Post a new user</button>

      <button onClick={callGetQuery}>Search user by query</button>

      <button onClick={callGetParams}>Search user by param</button>

      <button onClick={callGetBody}>Search user by POST</button>

      <button onClick={callPutBody}>Update by username</button>
    
      <button onClick={callPatchBodyUsername}>Update by part info</button>

      <button onClick={callDeleteParams}>Delete by username</button>

      <button onClick={registerUserTemp}>Create fake user NEW</button>


    </div>
  );
}

//find all users
function callGetAll() {
  fetch("http://localhost:3002/users", { method: "GET" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

//add user
function callPostBody() {
  fetch("http://localhost:3002/users", {
    method: "POST",
    body: JSON.stringify({
      username: "carina2",
      password: "222",
    }),
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
  })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}


function callGetQuery() {
  fetch("http://localhost:3002/findUser?username=carina", { method: "GET" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

function callGetParams() {
  fetch("http://localhost:3002/findUser/wuzhe", { method: "GET" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

//只返回一条数据，不显示carina2数组
function callGetBody() {
    fetch("http://localhost:3002/findUsers/get", {
      method: "POST",
      body: JSON.stringify({
        username: "carina2",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => alert(JSON.stringify(json)));
  }
  
  //根据username update
  function callPutBody() {
    fetch("http://localhost:3002/users", {
      method: "PUT",
      body: JSON.stringify({
        username: "wuzhe",
        password: "666666"
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => alert(JSON.stringify(json)));
  }
  
  //根据username  要求改的属性  ，username在url，
  function callPatchBodyUsername() {
    fetch("http://localhost:3002/users/carina2/password", {
      method: "PATCH",
      body: JSON.stringify({
        password: "777777"
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => alert(JSON.stringify(json)));
  }
  
  function callDeleteParams() {
    fetch("http://localhost:3002/users/carina2", { method: "DELETE" })
      .then((data) => data.json())
      .then((json) => alert(JSON.stringify(json)));
  }
  


  async function registerUserTemp(){

    // const hashedPassword = await bcryot.hash();

    fetch("http://localhost:3002/users/register", {
        method: "POST",
        body: JSON.stringify({
          username: "WUZHE2",
          password: "Abcd1234!",  //must use a valid password here
        }),
        headers: {
          "Content-type": "application/json;charset=utf-8",
        },
      })
        .then((data) => data.json())
        .then((json) => json.success ? alert("You're Registered") : alert(JSON.stringify(json)));

  }

export default DbData;
