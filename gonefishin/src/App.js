import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Lakes from "./pages/Lakes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

function App() {
// paths below need corresponding routes
    return (
        <Router>
        <div>
          <Navbar />
            <Switch>
                <Route path= {[]}>
                    <Login />
                </Route>
                <Route path= {[]}>
                    <Lakes />
                </Route>
                <Route path= {[]}>
                    <Home />
                </Route>
            </Switch>
          <Footer />
        </div>
    </Router>
      );
}

export default App;
