import React, { useState, useEffect } from 'react';

export function Clock() {

  //Hook useState
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  //Hook useEffect
  //当你调用 useEffect 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数。
  useEffect(
    () => {
      const interval = setInterval(
        () => 
          setTime(new Date().toLocaleTimeString()), 1000
      );
      
        //副作用函数还可以通过返回一个函数来指定如何“清除”副作用。
      return () => {
        clearInterval(interval);
      };
   }, [time]);

  return <p>React Clock: {time}</p>;
}

export default Clock;