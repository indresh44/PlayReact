import React, {useState, useEffect} from 'react'

function CountdownWithoutRef({isStarted=true}) {
    const [seconds, setSeconds] = useState(10);

    

    useEffect(()=>{
        const countDown = ()=>{
            console.log(seconds);
            if(seconds===0){
                clearInterval(myInterval);
                setSeconds(seconds);
            }
            else{
                const timeLeft = seconds - 1;
                console.log(timeLeft)
                setSeconds((seconds)=>{return timeLeft});
            }    
        }
        const myInterval = setInterval(countDown, 100);
        return () =>{
            clearInterval(myInterval);
        }
    })

    return (
        <div>
            <h2>Countdown without useref</h2>
            <h3>{seconds}</h3>
        </div>
    )
}

export default CountdownWithoutRef
