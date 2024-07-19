import propTypes from 'prop-types';

function Prompt(props){

    const welcomeMsg = <h2 className="welcome-msg">WELCOME {props.userName.toUpperCase()} !</h2>
    const promptMsg = <h2 className="prompt-msg">PLEASE LOGIN!</h2>

    return(props.isLoggedIn === true ? welcomeMsg : promptMsg)
}

prompt.prototype = {
    isLoggedIn : propTypes.bool,
    userName : propTypes.string,
}
export default Prompt