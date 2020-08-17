import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hellonavigate from "./Hellonavigate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/pro-organiser-application" component={Home} /> */}
            <Route path="/createboard" component={CreateBoard} />
            <Route path="/:id/:boardName" component={Boards} />
            <Route render={() => <h2>404 Page Not Found</h2>} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
