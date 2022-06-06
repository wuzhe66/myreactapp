import React from 'react';

export function UserActions(props) {
  //button will toggle the counter and the count...
  // and update both states via callbacks

  const handleOnClick = () =>{

    props.setColor(props.color === "blue" ? "red" :"blue");
    props.setCount(props.count + 1);

  }

  return (
    <button onClick = {handleOnClick} >
      click me React using function
    </button>
  );
}

export default UserActions;