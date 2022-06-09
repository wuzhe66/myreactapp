import React from 'react';
import { CounterDisplay } from '../components/CounterDisplay';
import { DisplayMessage } from '../components/DisplayMessage';
import { Clock } from '../components/Clock';
import { UserActions } from '../components/UserActions';
import DbData from '../components/DbData';


// JSON.parse(string) 将jsonStr转换成JavaScript 对象
// JSON.stringify(obj) JavaScript对象 转换成json字符串
export function Home() {

  //The state hook is called useState.
  const [color, setColor] = React.useState(
    JSON.parse(window.sessionStorage.getItem("color")) || "blue"
  );
  const [count, setCount] = React.useState(
    JSON.parse(window.localStorage.getItem("count")) || 0
  );


  //Hook 当【color, count】里面数值发现变化的时候，就调用line24,25的方法
  React.useEffect(
    () => {
      window.sessionStorage.setItem("color", JSON.stringify(color));
      window.localStorage.setItem("count", JSON.stringify(count));
    }, 
    [color, count]
  );

  return (
    <div>
            
      <DisplayMessage color={color} message="Hello React Native" />
      <Clock />
      <CounterDisplay count={count} />
      <DbData />
      <UserActions
        setColor={setColor}
        setCount={setCount}
        color={color}
        count={count} />
    </div>
  );
}

export default Home;