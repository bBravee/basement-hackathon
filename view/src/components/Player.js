import React from 'react';
import './styles/player.css';

const Player = () => {
    return ( 
        <div className="player">
            <div className="player-logo"></div>
            <div className="player-name">Name</div>
            <div className="player-break"></div>
            <div className="player-button">Enter</div>
        </div>
     );
}
 
export default Player;