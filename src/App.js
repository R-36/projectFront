import React from 'react';
import './App.css';
import AuthWindow from "./Components/Auth/AuthWindow";
import './Components/Common/common.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dashboard">
            Dashboard
          </Route>
          <Route path="/skilltree">
            Skilltree
          </Route>
          <Route path="/">
            <AuthWindow/>
          </Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
