import React from 'react';
import './styles/player.css';

const Player = (props) => {
    return ( 
        <div className="player">
            <div className="player-logo"><img className="player-logo-icon" src={props.img} alt={props.alt}/></div>
            <div className="player-name">Name</div>
            <div className="player-break"></div>
            <div className="player-button">Enter</div>
        </div>
     );
}
 
export default Player;