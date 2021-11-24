import './App.css';
import Back from "./components/Cover";
import Features from "./components/Features";
import Portfolio from './components/Portfolio';
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Contact from "./components/ContactUs";
import OurTeam from "./components/ourTeam";


function App() {
  return (
    <div className="App">
      <Back />
      <Features />
      <OurTeam />
      <Portfolio />
      <AboutUs />
      <Contact />
      <Footer />
      
      
    </div>
  );
}

export default App;
