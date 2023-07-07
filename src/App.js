import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import './App.css'
import Services from "./Components/Services";
import Features from "./Components/Features";
import DownloadApp from "./DownloadApp";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Services/>
      <Features/>
      <DownloadApp/>
      <Footer/>
    </div>
  );
}

export default App;
