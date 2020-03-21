import React, { Component } from "react";
import ProfilePanel from "../profile/ProfilePanel";
import MainScreen from "./MainScreen";
import './dashboard.css';
import Chat from "../chat/Chat";

export default class Dashboard extends Component {
  render() {
    return(
      <div className={'dashboard'}>
        <ProfilePanel/>
        <MainScreen/>
        <Chat/>
      </div>
    );
  }
}