import React, { useEffect, useState } from "react";

function IntervalTimer() {
  const [time, setTime] = useState(0);

  const updateTime = ()=>{
        return setTime(prev=>prev+1)
  }
  useEffect(() => {
     const interval = setInterval(updateTime,1000)
      return ()=>{
          clearInterval(interval)
      }
   
  },[]);
  return (
    <div>
      <p>Counter {time}</p>
    </div>
  );
}

export default IntervalTimer;
