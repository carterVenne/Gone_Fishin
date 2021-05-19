import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Map from './pages/MainMap/Map';
import Minnetonka from './pages/Lakes/Minnetonka';
import Red from './pages/Lakes/Red';
import Login from './pages/Login/Login';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Route exact path="/Map" component={Map}/>
      <Route exact path="/LakeMinnetonka" component={Minnetonka}/>
      <Route exact path="/RedLake" component={Red}/>
      <Route exact path="/Login" component={Login}/>
    </Router>
  )
}

export default App;
