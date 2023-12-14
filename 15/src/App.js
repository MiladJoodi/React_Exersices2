import {  Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Contact } from "./Pages/Contact";
import {Provider} from 'react-redux'
import { store } from "./Store";
function App() {
//redux
  return( <div className="App">
<Provider store={store}>
    <Router>
      <Link to="/">home</Link> | 
      <Link to="/login">login</Link> | 
      <Link to="/contact">contact</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </Provider>
  </div>);
}
export default App;
