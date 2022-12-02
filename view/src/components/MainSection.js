import React from 'react';
import './styles/mainSection.css';
import Player from './Player';



const mainSection = () => {
    return ( 
        <React.Fragment>
        <section className='mainSection'>
            <Player img="https://img.icons8.com/external-justicon-lineal-color-justicon/64/null/external-trophy-reward-and-badges-justicon-lineal-color-justicon-4.png" alt="playoff-icon"/>
            <Player img="https://img.icons8.com/external-dreamstale-green-shadow-dreamstale/64/null/external-competition-business-dreamstale-green-shadow-dreamstale.png
            " alt="league-icon"/>
        </section>
        </React.Fragment>
     );
}
 
export default mainSection;