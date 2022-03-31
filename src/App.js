import Home from "./pages/Home/Home/Home";
import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Navigation from "./Shared/Navigation/Navigation";
import About from "./pages/About/About";
import Services from "./Services/Services";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/skill" element={<Skills />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
