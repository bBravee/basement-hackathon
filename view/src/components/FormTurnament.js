import React, {useState, useEffect} from 'react';
import './styles/formTournament.css';
import Navbar from'./Navbar.js';


import ApiRecive from './ApiRecive';



const FormTurnament = () => {
    const [form, setForm] = useState({name: '', start_date: '', amount_of_players: ''});

    const handleName = event => {
        const name = event.target.value;
        setForm({...form, name});
    }

    const handleStart = event => {
        const start_date = event.target.value;
        setForm({...form, start_date});
    }

    const handleAmount = event => {
        const amount_of_players = event.target.value;
        setForm({...form, amount_of_players});
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/api/v1/tournament', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }).then(() => {
            console.log("Data corrently sent");
        })
    }
     
        return (
        <div>
            
        <div className="formDiv">
            <button onClick={handleSubmit} className='makeTurnamentBtn'>Stwórz turniej</button>
            <input type="text" onChange={handleName} value ={form.name} className="nameTournament" name="name" placeholder='Wpisz nazwę turnieju..' />
            <input type="number" onChange={handleAmount} value ={form.amount_of_players} className="sizeTournament" name="number" placeholder='Wybierz liczbę miejsc...' />
            <input type="datetime-local" onChange={handleStart} value ={form.start_date} className="timeTournament" name="time" placeholder='wybierz godzinę...' />
        </div>
        </div>
        );
    }

 
export default FormTurnament;