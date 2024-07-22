import React,{useState} from "react";

function DoList(){

    const[tasks,setTasks] = useState([]);
    const[newTask,setNewTask] = useState("");

    function handleInput(event){
        setNewTask(event.target.value);
    }

    function eventAddTask(){

        if(newTask.trim() !== ""){
            setTasks((t)=>[...t,newTask]);
            setNewTask("");
        }
    }

    function eventDeleteTask(index){
        const updatedTask = tasks.filter((_,i) => i !== index)
        setTasks(updatedTask)
    }

    function eventMoveup(index){

        if(index>0){
            const updatedTask = [...tasks]
            [updatedTask[index],updatedTask[index-1]] = 
            [updatedTask[index-1],updatedTask[index]];
            setTasks[updatedTask]
        }
        
    }

    function eventMoveDown(index){

        if(index>0){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index+1]] = 
            [updatedTask[index+1], updatedTask[index]];
            setTasks[updatedTask]
        }

    }


    return(
        <>
        <h1>TO DO LIST</h1>
        <div className="container">
            <input type="text" placeholder="Add a task..." id="taskInput" onChange={handleInput}/>
            <button id="addButton" onClick={eventAddTask}>ADD</button>

            <ol>
                {tasks.map((task,index) =>
                <li key={index}>
                    {task}
                    <button className="delete" onClick={() => eventDeleteTask(index)}>❌</button>
                    <button className="move-button" onClick={() => eventMoveup(index)}>⬆️</button>
                    <button className="move-button" onClick={() => eventMoveDown(index)}>⬇️</button>
                </li>)}
                <li></li>
            </ol>
        </div>
        </>
    )
}

export default DoList;