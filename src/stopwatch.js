import React, { useEffect, useState } from 'react'
import "./stopwatch.css";

function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

   useEffect(() => {
    let IntervalId;
    if(isRunning) {
        IntervalId = setInterval(() => {
            setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
        }, 1000);
    } 
    return () => clearInterval(IntervalId);
   },[isRunning]);

   const formatTime = (time) => {
    const minutes = Math.floor( time/60 );
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    const reset = () => {
        setElapsedTime(0);
        setIsRunning(false);
    }

    const startStop = () => {
        setIsRunning((prevState) => !prevState );
    }

  return (
    <div className='container'>
        <h1>Stopwatch</h1>
        <p>Time: {formatTime(elapsedTime)}</p>
        <button onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Stopwatch