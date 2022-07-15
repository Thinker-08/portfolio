import "./App.css";
import Navbar from "./components/navbar";
import Socials from "./components/socials";
import Home from "./components/home";
import Education from "./components/education";
import Projects from "./components/projects";
import Certificates from "./components/certificates.jsx";
import Awards from "./components/awards";
import Skills from "./components/skills";
import Contact from "./components/contact";
import About from "./components/about";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <div className="flex flex-row">
      <Socials/>
      <div className="flex flex-col ">
      <Home/>
      <About/>
      <Education/>
      <Projects/>
      <Certificates/>
      <Awards/>
      <Skills/>
      <Contact/>
      </div>

    </div>
    </div>
  );
}

export default App;
