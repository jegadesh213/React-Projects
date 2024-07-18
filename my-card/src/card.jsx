import profilePic from './assets/myprofile.jpg'

function Card(){
    return(
        <body>
            <div className="card">
                <img className="card-image" src={profilePic} alt="Profile Pic" />
                <h1>JEGADESH MUTHU</h1>
                <p>I AM A 21 YR OLD DEVELOPER FROM CHENNAI, INDIA</p>
            </div>
        </body>
    );
}

export default Card