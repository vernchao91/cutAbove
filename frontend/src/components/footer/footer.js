import React from 'react'
import { Link } from "react-router-dom"

function Footer() {

    return(
        <div className = "footer">
            <Link className="team-link" to={`/team`} >Meet the team</Link>
            Copyright &copy; 2021 cutAbove
        </div>
    )
}

export default Footer