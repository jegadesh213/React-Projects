function Logs(){
    
    return(
        <body>
            <div className="container">
                <h1>LOGIN</h1>
                <input type="text" id="user-name" placeholder="Enter Username"/><br />
                <button type="submit" id="submit-button" onClick={props.action()}>LOGIN</button>
            </div>
        </body>
    )
}

export default Logs;