import React,{useState, useEffect} from 'react'





function Countdown({ isStarted=false}) {

    const [seconds, setSeconds] = useState(10);
    const interval = React.useRef(null);

    console.log(seconds);

    //below is incorrect function, as the value seconds is of inital state.
    // const countDown = ()=>{

    //     console.log(seconds);
    //     if(seconds===0){
    //         clearInterval(interval.current);
    //         setSeconds(seconds);
    //     }
    //     else{
    //         const timeLeft = seconds - 1;
    //         console.log(timeLeft)
    //         setSeconds((seconds)=>{return seconds-1});
    //     }    
    // }

    const countDown1 = () =>
    setSeconds((seconds) => {
      if (seconds === 0) {
        clearInterval(interval.current);
        return seconds;
      }
      const timeLeft = seconds - 1;
      return timeLeft;
    });

    useEffect(()=>{
        if(!isStarted){
           if (interval.current) clearInterval(interval.current);
           return; 
        }
        // const interval = setInterval( () => {setseconds(countDown(seconds,interval))}, 1000);
        console.log("use effect")
        console.log(seconds);
        interval.current = setInterval(countDown1, 1000);
        return ()=> {
            clearInterval(interval.current);
            // clearInterval(interval);

          };
    },[isStarted])

    return (
        <div>
            <h1>{seconds}</h1>
        </div>
    )
}

export default Countdown
