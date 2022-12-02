import './App.css';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainSection/>
      <p>React</p>
      <Footer/>
    </div>
  );
}

export default App;
