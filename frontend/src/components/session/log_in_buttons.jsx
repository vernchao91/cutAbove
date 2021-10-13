import React from 'react'
import { Link } from 'react-router-dom'


export default function signupbuttons() {
    return(
        <div className = "signup-buttons">
        <span>Are you a:</span>
        <br/>
            <div className = "signup-buttons-container">
            <Link className = "buttonforsignupform" to = "/users/login">
                Client?
            </Link>
            <Link className = "buttonforsignupform" to = "/stylists/login">
                Stylist?
            </Link>
            </div>
        </div>
    )
}