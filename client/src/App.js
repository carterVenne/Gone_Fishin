import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
// import Minnetonka from './pages/Lakes/Minnetonka';
// import Red from './pages/Lakes/Red';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Route exact path="/Home" component={Home}/>
      {/* <Route exact path="/LakeMinnetonka" component={Minnetonka}/>
      <Route exact path="/RedLake" component={Red}/> */}
    </Router>
  )
}

export default App;
