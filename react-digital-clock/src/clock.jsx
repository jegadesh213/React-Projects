import React,{useState,useEffect} from "react"

function Clock(){

    const [time , setTime ] = useState(new Date());

    useEffect(() => {
        let timeInterval = setInterval(()=>{
            setTime(new Date());
        },1000)
        
        return()=>{
            clearInterval(timeInterval)
        }
    },[])

    function formatClock(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        let meridian = hours >= 12 ? "PM" : "AM"

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}: ${meridian}`
    }


    function padZero(number){
       return (number < 10 ? "0" : "") + number
    }

    return(
        <>
            <h1>DIGITAL CLOCK</h1>
            <div className="clock-container">
                <div className="clock-content">
                    <span className="clock-text">{formatClock()}</span>
                </div>
            </div>
        </>
    )
}

export default Clock