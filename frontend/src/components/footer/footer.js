import React from 'react'
import { Link } from "react-router-dom"
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {

    return(
        <div className="footer-wrapper">
            <div className="footer-flex">

                <div className="footer-about">
                    <h3>About</h3>
                    <ul>About Us</ul>
                    <ul>How It Works</ul>
                    <ul>Terms of Service</ul>
                    <ul>Terms & Conditions</ul>
                    <ul>Privacy Policy</ul>
                </div>

                <div className="footer-technologies">
                    <h3>Technologies</h3>
                    <a href="https://www.mongodb.com/" target="_blank">MongoDB</a>
                    <a href="https://mongoosejs.com/" target="_blank">Mongoose</a>
                    <a href="https://expressjs.com/" target="_blank">Express</a>
                    <a href="https://reactjs.org/" target="_blank">React</a>
                    <a href="https://redux.js.org/" target="_blank">Redux</a>
                    <a href="https://nodejs.org/en/" target="_blank">Node</a>
                    <a href="https://aws.amazon.com/" target="_blank">AWS</a>
                </div>

                <div className="footer-connect">
                    <h3>Connect</h3>
                    <a href="" target="_blank"></a>
                    <ul>Help Center</ul>
                    <ul>contact@cutabove.com</ul>
                    <p>(if you are a customer seeking support)</p>
                </div>

                <div className="footer-support">
                    <h3>Support</h3>
                    <a href="" target="_blank"></a>

                    <ul>Help & Support</ul>
                    <ul>Trust & Safety</ul>
                    <ul></ul>
                    <ul></ul>

                </div>

                <div className="footer-meet-the-team">
                    <Link className="team-link" to={`/team`}>Meet the team</Link>
                    <ul>Alex Crooks</ul>
                    <ul>Hicham Elalam</ul>
                    <ul>Connor Germain</ul>
                    <ul>Vern Chao</ul>
                </div>
            </div>

                <div className="under-footer-wrapper">
                    <div className="under-footer">
                        <div className="under-footer-cutabove">cutAbove</div>
                        <div className="under-footer-copyright">Copyright &copy; 2021 cutAbove</div>
                    </div>
                    <div className="footer-github">
                        <a href="https://github.com/acrks/cutAbove" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="footer-github"/>
                        </a>
                    </div>
                </div>

        </div>
    )
}

export default Footer