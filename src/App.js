import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import SoftSkills from './Components/SoftSkills/SoftSkills';
import ContactUs from './Components/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <SoftSkills />
      <ContactUs />
    </div>
  );
}

export default App;
