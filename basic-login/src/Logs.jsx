import React,{useState} from "react"


function Logs(props){

    const [name , setName] = useState("Guest")
    

    let welcomeMsg = <h1>Welcome {name}</h1>
    let prompt = <h1>Login to Continue</h1>
    
    let clickControl = () =>{
        let inputname = document.getElementById("user-name") ;

        if(typeof inputname.value === "string"){
            setName(inputname.value)
        }
        else{
            props.isLoggedIn = false
        }
        
    }

    return(
        <body>
            <div className="container">
                <h1>LOGIN</h1>
                <input type="text" id="user-name" placeholder="Enter Username"/><br />
                <button type="submit" id="submit-button" onClick={() => clickControl()}>LOGIN</button>

                {props.isLoggedIn === true ? welcomeMsg : prompt}
            </div>
        </body>
    )
}

export default Logs;