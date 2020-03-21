import React from 'react';
import './App.css';
import AuthWindow from "./Components/Auth/AuthWindow";
import './Components/Common/common.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const isAuthenticated = () => {
  return !!cookies.get('authenticated');
};

function App() {
  return (
    <Router>
      <div className="App">
          {!isAuthenticated() ?
            <Redirect to={'/'}/> : ''
          }
          <Switch>
            <Route path="/dashboard">
                <div>Dashboard</div>
            </Route>
            <Route path="/skilltree">
                <div>SkillTree</div>
            </Route>
            <Route path="/">
              {!isAuthenticated() ?
                <AuthWindow/> : <Redirect to={'/dashboard'}/>
              }
            </Route>
          </Switch>
      </div>
    </Router>

  );
}

export default App;
