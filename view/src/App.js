import './App.css';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
      <Navbar 
        first={<button className="btn btn-outline-warning btn-lg">Zaloguj</button>}
        second={<button className="btn btn-outline-warning btn-lg">Zarejestruj</button>}
        third={<button className="btn btn-outline-warning btn-lg">apiReturn</button>}

      />
      <MainSection/>
      <Footer/>
    </div>
  );
}

export default App;
