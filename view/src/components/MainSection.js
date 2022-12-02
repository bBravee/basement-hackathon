import React from 'react';
import './styles/mainSection.css';
import Player from './Player';



const mainSection = () => {
    return ( 
        <React.Fragment>
        <div className="mainSection-break"></div>
        <section className='mainSection'>
            <Player/>
            <Player/>
        </section>
        </React.Fragment>
     );
}
 
export default mainSection;