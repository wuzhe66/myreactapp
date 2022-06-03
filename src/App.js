// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [color, setColor] = React.useState(
    JSON.parse(window.sessionStorage.getItem("color")) || "blue"
);
const [count, setCount] = React.useState(
    JSON.parse(window.localStorage.getItem("count")) || 0
  );

  React.useEffect(() => {
    window.sessionStorage.setItem("color", JSON.stringify(color));
    window.localStorage.setItem("count", JSON.stringify(count));
  }, [color,count]);

  return (
    <div>
      <DisplayMessage color={color} />
      <Clock />
      <p>{count}</p>
      <UserActions 
        setColor = {setColor}
        setCount = {setCount}
        color = {color}
        count = {count}
        />
    
    </div>
  );
}

//写法二
// class Main2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       color: "blue",
//       count: 0,
//     };
//   }

//   updateColorAndCount = () => {
//     const newColor = this.state.color === "blue" ? "red" : "blue";
//     const newCount = this.state.count + 1;

//     this.setState({
//       color: newColor,
//       count: newCount,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <DisplayMessage color={this.state.color} />
//         <Clock time={new Date().toLocaleTimeString()} />
//         <button onClick={this.updateColorAndCount}>Click me React</button>
//         <p>{this.state.count}</p>
//       </div>
//     );
//   }
// }

function toggle(color) {
  if (color === "blue") {
    return "red";
  } else {
    return "blue";
  }
}

//component
function DisplayMessage(props) {
  return <h1 style={{ color: props.color }}>Hello React!</h1>;
}

//props
function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect( () => {
    const interval = setInterval(
        () => setTime(new Date().toLocaleTimeString()),1000
    );
    return() => {
      clearInterval(interval);
    }
  }, [time]);
  
  return <p>React Clock: {time}</p> ;
}

function UserActions(props) {

  //button will toggle the counter and the count...

  // and update both states via callbacks

  return (

    <button

      onClick={() => {

        props.setColor(toggle(props.color));

        props.setCount(props.count + 1);

      }}

    >

      click me React using function

    </button>

  );

}

export default App;
