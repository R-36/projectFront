import React, { Component } from "react";
import './AuthWindow.css';
import Login from "./Login";
import Register from "./Register";

export default class AuthWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'login',
    }
  }
  render() {
    const { tab } = this.state;
    return(
      <div className={'auth-window _centered'}>
        {tab === 'register' ?
          <Register switchTab={ () => this.setState({tab: 'login'})}/>
          :
          <Login switchTab={ () => this.setState({tab: 'register'})}/>
        }
      </div>
    );
  }
}