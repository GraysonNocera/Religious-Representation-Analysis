import React from "react"
import { Route, Routes, Link } from "react-router-dom"
import About from "./pages/About";
import Background from "./pages/Background";
import './css/app.css'
import Home from "./pages/Home";
import Connection from "./pages/Connection";
import Analysis from "./pages/Analysis";
import Stats from "./pages/Stats";
import MyLink from "./pages/Link";

function App() {
  return (
    <>
      <nav>
        <ul className="links">
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/about" className="link">About this Presentation</Link></li>
          <li><Link to="/background" className="link">Background Information</Link></li>
          <li><Link to="/connection" className="link">Connection to Religion</Link></li>
          <li><Link to="/analysis" className="link">Analysis of Representation of Religion</Link></li>
          <li><Link to="/stats" className="link">My Stats</Link></li>
          <li><Link to="/link" className="link">Link to Game Website</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/background" element={<Background />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/link" element={<MyLink />} />
      </Routes>
    </>
  );
}

export default App;
