import React, { Component } from "react";
import ProfilePanel from "../profile/ProfilePanel";
import MainScreen from "./MainScreen";
import './dashboard.css';

export default class Dashboard extends Component {
  render() {
    return(
      <div className={'dashboard'}>
        <ProfilePanel/>
        <MainScreen/>
      </div>
    );
  }
}