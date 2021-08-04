import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Registration from './Registration';
import NewHome from './NewHome';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/Registration">
          <Registration></Registration>
          </Route>
          <Route path="/NewHome">
          <NewHome></NewHome>
          </Route>
          <Route path="/Home">
          <Home></Home>
          </Route>
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;