import React from 'react';
import './styles/playOffs.css';
import Navbar from './Navbar.js';

import FormTurnament from './FormTurnament';
import TableTournaments from './TableTournaments';

const PlayOffs = () => {
    return (  
        <section className="playOffs">
            <Navbar 
                first="Tekst"
                second="Tekst"
            />
            <div className="nameChampionship">
                <div></div>
                <div className="title">Nazwa Cahmpionshpis</div>
            </div>
            <FormTurnament/>

            <div className="mode">
                <p className="title">Tryb Playoffs</p>
                <div className="logo">
                    <img src="" alt="" />
                </div>
                <p>(?)</p>
            </div>

            <TableTournaments/>
                
        </section>
    );
}
 
export default PlayOffs;