import React from 'react';
import { CounterDisplay } from '../components/CounterDisplay';
import { DisplayMessage } from '../components/DisplayMessage';
import { Clock } from '../components/Clock';
import { UserActions } from '../components/UserActions';


// JSON.parse(string) 将jsonStr转换成JavaScript 对象
// JSON.stringify(obj) JavaScript对象 转换成json字符串
export function Home() {
  const [color, setColor] = React.useState(
    JSON.parse(window.sessionStorage.getItem("color")) || "blue"
  );
  const [count, setCount] = React.useState(
    JSON.parse(window.localStorage.getItem("count")) || 0
  );

  React.useEffect(() => {
    window.sessionStorage.setItem("color", JSON.stringify(color));
    window.localStorage.setItem("count", JSON.stringify(count));
  }, [ color, count]);

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

export default Home;