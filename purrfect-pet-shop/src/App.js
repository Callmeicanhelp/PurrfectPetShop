import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Costumes from "./pages/Costumes";
import Accessories from "./pages/Accessories";
import Toys from "./pages/Toys";
import Towers from "./pages/Towers";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import React, { Component } from "react";
// import Account from './pages/Account'
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/costumes" element={<Costumes />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/toys" element={<Toys />} />
              <Route path="/towers" element={<Towers />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              {/* <Route pathh="/account" element={<Account />} */}
            </Routes>
          </Router>
        </header>
        <Footer />
      </div>
    );
  }
}

export default App;
