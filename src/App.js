import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import Ergebnis from "./Ergebnis"
import Home from "./Home"
import Start from './Start';
import Test from './Test';

import NichtGefunden from "./NichtGefunden"

function App() {
  return (
    // Router Komponente als oberstes Element:
    <Router>
      <div className="App">

        <main>
          <Switch>
            <Route exact path='/'><Start /></Route>
            <Route exact path='/Home'><Home /></Route>
            <Route path='/Startseite'> <Test /> </Route>
            <Route path="/Ergebnis"><Ergebnis /></Route>
            <Route path="/Test"><Test /></Route>
            <Route path='*'> <NichtGefunden /> </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;