import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [color, setColor] = React.useState(
    JSON.parse(sessionStorage.getItem("color")) || "blue"
);
const [count, setCount] = React.useState(
    JSON.parse(localStorage.getItem("count")) || 0
  );

  React.useEffect(() => {
    sessionStorage.setItem("color", JSON.stringify(color));
localStorage.setItem("count", JSON.stringify(count));

  }, [color,count]);

  return (
    <div>
      <DisplayMessage color={color} />
      <Clock time={new Date().toLocaleTimeString()} />
      <button
        onClick={() => {
          setColor(toggle(color));
          setCount(count + 1);
        }}
      >
        Click me React
      </button>
      <p>count:{count}</p>
    </div>
  );
}

//写法二
class Main2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue",
      count: 0,
    };
  }

  updateColorAndCount = () => {
    const newColor = this.state.color === "blue" ? "red" : "blue";
    const newCount = this.state.count + 1;

    this.setState({
      color: newColor,
      count: newCount,
    });
  };

  render() {
    return (
      <div>
        <DisplayMessage color={this.state.color} />
        <Clock time={new Date().toLocaleTimeString()} />
        <button onClick={this.updateColorAndCount}>Click me React</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

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
function Clock(props) {
  return <p>React Clock:{props.time}</p>;
}

root.render(<Main />);

export default App;
