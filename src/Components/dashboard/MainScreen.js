import React, {Component} from "react";
import ScreenHeader from "./ScreenHeader";
import Navigation from "./Navigation";


export default class MainScreen extends Component {
  render() {
    return(
      <div className={'main-screen'}>
        <ScreenHeader/>
        <Navigation/>
      </div>
    )
  }
}