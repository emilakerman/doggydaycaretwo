import { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';


const Welcome = (props) => {

    let buttonTitle1 = 'Show Registered Dog Names';

    return (
        <div id="welcomeCard">
            <h2>Welcome to Doggy Daycare</h2>
            <Link to="/dogs">
                <button>{buttonTitle1}</button>
            </Link>
        </div>
    )
}
export default Welcome;