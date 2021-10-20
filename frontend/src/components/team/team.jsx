import React from "react";
import Alex from "./Alex2.png";
import Hitch from "./Hitch2.png";
import Connor from "./Connor2.png";
import Vern from "./Vern2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons';

const TeamPage = () => {
  return (
    <div className="team-page-container">
      <h1>Developer Team</h1>
        <div className="members-container">
  
        <div className="member-card">
            <h2>Alex Crooks</h2>
            <div className="image-cropper">
                <img src={Alex} alt="" className="member-pic"/>
            </div>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/alex-crooks/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="fontAwesome"/>
                </a>
                <a href="https://github.com/acrks" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="fontAwesome"/>
                </a>
                {/* <a href="" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faAngellist} className="fontAwesome"/>
                </a> */}
            </div>
        </div>
  
        <div className="member-card">
            <h2>Hicham Elalam</h2>
            <div className="image-cropper">
                <img src={Hitch} alt="" className="member-pic"/>
            </div>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/hicham-elalam-06117a128/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="fontAwesome"/>
  
                </a>
                <a href="https://github.com/Hitch77" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="fontAwesome"/>
  
                </a>
                {/* <a href="" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faAngellist} className="fontAwesome"/>
                </a> */}
            </div>
        </div>
  
        <div className="member-card">
            <h2>Connor Germain</h2>
            <div className="image-cropper">
                <img src={Connor} alt="" className="member-pic"/>
            </div>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/connor-germain-04ab10188/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="fontAwesome"/>
                </a>
                <a href="https://github.com/Onaconnapuna" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="fontAwesome"/>
                </a>
                {/* <a href="" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faAngellist} className="fontAwesome"/>
                </a> */}
            </div>
        </div>
  
        <div className="member-card">
            <h2>Vern Chao</h2>
            <div className="image-cropper">
                <img src={Vern} alt="" className="member-pic"/>
            </div>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/vern-chao-a8201a1ba/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="fontAwesome"/>
                </a>
                <a href="https://github.com/vernchao91" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="fontAwesome"/>
                </a>
                {/* <a href="" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faAngellist} className="fontAwesome"/>
                </a> */}
            </div>
        </div>
  
    </div>
  </div>
  )
}

export default TeamPage