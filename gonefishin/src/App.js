import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Lakes from "./pages/Lakes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';
import { Auth0Provider } from "@auth0/auth0-react"

function App() {
// paths below need corresponding routes
    return (
    <Auth0Provider
    domain="YOUR_DOMAIN"
    clientId="YOUR_CLIENT_ID"
    redirectUri={window.location.origin}>
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
    </Auth0Provider>
      );
}

export default App;
