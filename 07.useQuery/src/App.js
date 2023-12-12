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
import {QueryClient, QueryClientProvider} from 'react-query'


function App() {

  const client = new QueryClient({defaultOptions: {
    queries: {refetchOnWindowFocus: false},
  }})

  const [username,setUsername] = useState("Joodi")

  
  return (
    <div className="App">
      <QueryClientProvider client={client}>
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
      </QueryClientProvider>
    </div>
  );
}

export default App;
