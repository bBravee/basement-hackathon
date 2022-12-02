import React from 'react';
import './styles/mainSection.css';
import Player from './Player';



const mainSection = () => {
    return ( 
        <React.Fragment>
        <section className='mainSection'>
            <Player/>
            <Player/>
        </section>
        </React.Fragment>
     );
}
 
export default mainSection;