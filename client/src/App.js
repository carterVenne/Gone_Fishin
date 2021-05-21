import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Minnetonka from './pages/Lakes/Minnetonka/Minnetonka';
import Vermilion from './pages/Lakes/Vermilion/Vermilion';
import Superior from './pages/Lakes/Superior/Superior';
import Bemidji from './pages/Lakes/Bemidji/Bemidji';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Route exact path="/Home" component={Home}/>
      <Route exact path="/Minnetonka" component={Minnetonka}/>
      <Route exact path="/Vermilion" component={Vermilion}/>
      <Route exact path="/Superior" component={Superior}/>
      <Route exact path="/Bemidji" component={Bemidji}/>
    </Router>
  )
}

export default App;
