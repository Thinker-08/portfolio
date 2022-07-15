import "./App.css";
import Navbar from "./components/navbar";
import Socials from "./components/socials";
import About from "./components/about";
import Education from "./components/education";
import Projects from "./components/projects";
import Certificates from "./components/certificates.jsx";
import Awards from "./components/awards";
import Skills from "./components/skills";
import Contact from "./components/contact";
function App() {
  return (
    <div className="App">
    <Navbar/>
    <div className="flex flex-row">
      <Socials/>
      <div className="flex flex-col">
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
