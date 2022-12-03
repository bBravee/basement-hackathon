import React from 'react';
import './styles/player.css';
import { Link } from "react-router-dom";

const Player = (props) => {
    return ( 
        <>
        <Link to="/about">
        <button className="player">
            <div className="player-logo"><img className="player-logo-icon" src={props.img} alt={props.alt}></img></div>
            <div className="player-name">Name</div>
            <div className="player-break"></div>
            <div className="player-button">Enter</div>
        </button>
        </Link>
        </>
     );
     
}
 
export default Player;