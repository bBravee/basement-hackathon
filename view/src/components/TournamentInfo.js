import React from "react"
import Navbar from "./Navbar.js"
import './styles/TournamentInfo.css'


const TournamentInfo = () => {

    function generate () {
        const wrapper = document.getElementById("wrapper");
        var j = 0;
        var x = 8;

        for(var i=0; i<=3; i++) {
        // Tworzy nowy kontener
        const newDiv = document.createElement("div");
        // Dodaje unique id kontenerowi
        newDiv.setAttribute("id", j++);
        newDiv.classList.add("new-div");
        // Dopina do konteneru nowy kontener
        wrapper.appendChild(newDiv);
        for(var k=x; k>0; k--) {
            var neww = document.createElement("nav");
            newDiv.appendChild(neww);
        }
        if(x === 2) {
            x = 1;
        } else {
            x = x/2;
        }
        
        }
    }
 
    return ( 
        <>
        { <Navbar first="imie" second="nazwisko"/> }

        <div className="tournamentInfo">
            <div className="back"> --- Back</div>
            <div className="rounds" id="wrapper">
                rounds
            </div>
            <div className="scores">scores</div>
        </div>
        </>
     );
}
 
export default TournamentInfo;
    




