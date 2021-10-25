import React from 'react'
import { Link } from "react-router-dom"
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {

    return(
        <div className = "footer">
            <div className="technologies-used">
                <p>Technologies used</p>
                <br/>
                <ul>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Node</li>
                </ul>
            </div>
            <div className="connect">
                <p>Connect</p>
            </div>
            <div className="popular">
                Learn
            </div>

            <Link className="team-link" to={`/team`} >Meet the team</Link>
            <a href="https://github.com/acrks" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className="footer-github"/>
            </a>
            Copyright &copy; 2021 cutAbove
        </div>
    )
}

export default Footer