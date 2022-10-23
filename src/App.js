import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';

import Home from './components/home/Home';
import About from './components/About';
import Contact from './components/Contact';

import Cocaine from './components/substance/Cocaine';
import Alcohol from './components/substance/Alcohol';
import Anxiety from './components/mental-health/Anxiety';
import Bipolar from './components/mental-health/Bipolar';

import Navbarmenu from './components/menu/Navbarmenu';

function App() {
  return (
    <div>
      <Router basename="/">

        {/* Add Menu Component */}
        <Navbarmenu />
        
        <Switch> 
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Contact" component={Contact}/>

          <Route path="/Anxiety" component={Anxiety}/>
          <Route path="/Bipolar" component={Bipolar}/>
          <Route path="/Alcohol" component={Alcohol}/>
          <Route path="/Cocaine" component={Cocaine}/>

          
        </Switch>
      </Router>

    </div>
  );
}

export default App;
