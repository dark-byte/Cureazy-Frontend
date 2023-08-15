import './App.css'
import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import Services from "../Components/Services";
import Features from "../Components/Features";
import DownloadApp from "../Components/DownloadApp";
import Footer from "../Components/Footer";
import FindDoc from "../Components/FindDoc";

function Landing(loggedIn, setLoggedIn) {
  return (
    <div className="App">
      <Nav loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>
      <Hero/>
      <FindDoc/>
      <Services/>
      <Features/>
      <DownloadApp/>
      <Footer/>
    </div>
  );
}

export default Landing;
