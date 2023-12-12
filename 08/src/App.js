import { useState, createContext} from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Nav from "./Pages/Nav";
import Profile from "./Pages/Profile";
import Footer from "./Footer";
import Error from "./Pages/Error";

export const ProfileContext = createContext(); 

function App() {
  const [username,setUsername] = useState("Joodi")

  const value = {username, setUsername}
  
  return (
    <div className="App">
    <ProfileContext.Provider value={value}>
      <Router>
        <div>SarvinStyle</div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
      </ProfileContext.Provider>
    </div>
  );
}

export default App;
