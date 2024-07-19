import React,{useState} from "react";

function Colorpicker(){

    const [color , setColor] = useState("#FFFFF")

    function handleColorSelection(event){
        setColor(event.target.value)
    }

    return(
        <>
        <div className="color-container">
            <h1>COLOR PICKER</h1>
            <div className="color-display" style={{backgroundColor : color}}>
                <p>SELECTED COLOR : {color}</p>
            </div>
            <label >SELECT A COLOR : </label>
            <input type="color" value={color} onChange={handleColorSelection} />
        </div>
        </>
    )
}

export default Colorpicker;