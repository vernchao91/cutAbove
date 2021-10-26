import React from 'react' 

const StyleIndexItem = props => (
  <li> Is this working
    <img className= "style-photo" src={props.style.imageUrl} alt="Style Photo"/>
    <p>{props.style.styleType}</p>
    <p>{props.style.description}</p>
    <p>{props.style.price}</p>
    <button onClick={() => props.deleteStyle(props.style.id)}>deleteStyle</button>
  </li>
);

export default StyleIndexItem