import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Navbar/nav.js";
import Home from "./pages/Home/Home.js";
import AboutUs from "./pages/About/AboutUs.js";
import SpeechTherapy from "./pages/SpeechTherapy/SpeechTherapy.jsx";
import JoinUs from "./pages/JoinUs/JoinUs.jsx";
import Resources from "./pages/Resources/Resources.jsx";

function App() {
  return (
    <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/speech-therapy" element={<SpeechTherapy />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
    </div>
  );
}

export default App;
