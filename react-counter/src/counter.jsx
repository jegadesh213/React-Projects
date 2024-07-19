import React,{useState} from "react";

function Counter(){

    let [count , setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return(
        <>
        <div className="container">
            <h1>{count}</h1>
            <button className="incButton" onClick={decrement}>DECREAMENT</button>
            <button className="resetButton" onClick={reset}>RESET</button>
            <button className="decButton" onClick={increment}>INCREAMENT</button>
        </div>
        </>
    )
}

export default Counter;