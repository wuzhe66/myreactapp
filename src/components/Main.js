import React from 'react';
import { CounterDisplay } from './CounterDisplay';
import { DisplayMessage } from './DisplayMessage';
import { Clock } from './Clock';
import { UserActions } from './UserActions';



export function Main() {
  const [color, setColor] = React.useState(
    JSON.parse(window.sessionStorage.getItem("color")) || "blue"
  );
  const [count, setCount] = React.useState(
    JSON.parse(window.localStorage.getItem("count")) || 0
  );

  React.useEffect(() => {
    window.sessionStorage.setItem("color", JSON.stringify(color));
    window.localStorage.setItem("count", JSON.stringify(count));
  }, [color, count]);

  return (
    <div>
      <DisplayMessage color={color} message="Hello React Native" />
      <Clock />
      <CounterDisplay count={count} />
      <UserActions
        setColor={setColor}
        setCount={setCount}
        color={color}
        count={count} />
    </div>
  );
}
