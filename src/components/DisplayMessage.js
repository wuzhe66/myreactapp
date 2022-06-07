import React from 'react';

//component
export function DisplayMessage(props) {
  //行内样式
  return <h1 style={{ color: props.color }}>Hello React!</h1>;
}

export default DisplayMessage;