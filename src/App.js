import "./App.css";
import About from "./components/about"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main.jsx"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
