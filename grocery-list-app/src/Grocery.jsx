import React,{useState} from "react";

function Grocery(){

    const [foods, setFoods] = useState([]);

    function handleAddEvent(){
        const inputItem = document.getElementById("inputItem").value.toUpperCase();
        setFoods((f)=>[...f,inputItem])

        document.getElementById("inputItem").value = "";
    }

    function handleRemoveEvent(index){

        setFoods(foods.filter((_, i) => i !== index));
    }

    return(
        <>
        <div className="Container">
            <h1>GROCERY LIST</h1>
            <ul>
                {foods.map((food,index)=>
                <li key={index}  onClick={() => handleRemoveEvent(index)} >
                    {food}
                </li>
                )}
            </ul>
            <input type="text" name="" id="inputItem" placeholder="ENTER THE ITEM" />
            <button onClick={handleAddEvent}>ADD</button>
        </div>
        </>
    )
}

export default Grocery;