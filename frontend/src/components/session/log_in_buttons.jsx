import React from 'react'
import { Link } from 'react-router-dom'
import DemoLogin from './demo_login_container'


export default function signupbuttons() {
    return(
        <div className = "signup-buttons">
            <div className = "signup-option" >
            Are you new to cutAbove?
            <br/>
            <br/>
            <Link to='/signup' className = "buttonforsignupform">Sign Up Here</Link> 
            </div>
        <br/>
        Which type of profile would you like to log in to?
        <br/>
            <div className = "signup-buttons-container">
            <Link className = "buttonforsignupform" to = "/users/login">
                Client
            </Link>
            <DemoLogin />
            <Link className = "buttonforsignupform" to = "/stylists/login">
                Stylist
            </Link>
            </div>
        </div>
    )
}