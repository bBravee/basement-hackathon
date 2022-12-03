import React  from 'react';
import './styles/formTournament.css';
import './Navbar.js';



class FormTurnament extends React.Component {
    state = { 
        name: "",
        number: "",
        time: "",
     } 

     handleData = () => {

     }

     handleChange = (e) => {
        const name = e.target.name;

        const value = e.target.value;
        // console.log(name,value);
        this.setState({
        [name]: value
      });
      
      
     }
    render() { 
        return (
        <div className="formDiv">
            <button onClick={this.handleData} className='makeTurnamentBtn'>Stwórz turniej</button>
            <input type="text" onChange={this.handleChange} value ={this.state.name} className="nameTournament" name="name" placeholder='Wpisz nazwę turnieju..' />
            <input type="number" onChange={this.handleChange} value ={this.state.number} className="sizeTournament" name="number" placeholder='Wybierz liczbę miejsc...' />
            <input type="datetime-local" onChange={this.handleChange} value ={this.state.time} className="timeTournament" name="time" placeholder='wybierz godzinę...' />

            <div>{this.state.name}</div>
        </div>
        );
    }
}
 
export default FormTurnament;