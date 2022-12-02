import React from 'react';
import './styles/mainSection.css';
import Player from './Player';
import minecraftSword from './../images/SwordMinecraft.png';




const mainSection = () => {
    return ( 
        <React.Fragment>
        <section className='mainSection'>
            <Player img="https://img.icons8.com/external-justicon-lineal-color-justicon/64/null/external-trophy-reward-and-badges-justicon-lineal-color-justicon-4.png" alt="playoff-icon"/>
            <Player img={minecraftSword}alt="league-icon"/>
        </section>
        </React.Fragment>
     );
}
 
export default mainSection;