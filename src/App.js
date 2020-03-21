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
          <Switch>
            <Route path="/dashboard">
              {!isAuthenticated() ?
                <Redirect to={'/'}/>
                :
                <div>Dashboard</div>
              }
            </Route>
            <Route path="/skilltree">
              {!isAuthenticated() ?
                <Redirect to={'/'}/>
                :
                <div>SkillTree</div>
              }
            </Route>
            <Route path="/">
              {isAuthenticated() ?
                <Redirect to={'/dashboard'}/> : <AuthWindow/>
              }
            </Route>
          </Switch>
      </div>
    </Router>

  );
}

export default App;
