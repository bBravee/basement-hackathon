import React from 'react';
import './styles/playOffs.css';

import Navbar from './Navbar.js';
import Footer from './Footer.js';

import Miecze from './../images/SwordMinecraft.png';

import FormTurnament from './FormTurnament';
import TableTournaments from './TableTournaments';

const PlayOffs = () => {
    return (
        <div className="playoffs-wrapper">
        <Navbar second={<button className="btn btn-outline-warning btn-lg">Zaloguj</button>}/>
        <section className="playOffs">
            <FormTurnament/>
            <div className="mode">
                <p className="title">Tryb Playoffs</p>
                <div className="logo">
                    <img src={Miecze} alt="Miecze" />
                </div>
                {/* <p>(?)</p> */}
            </div>

            <TableTournaments/>
                
        </section>
        <Footer />
        </div> 
    );
}
 
export default PlayOffs;