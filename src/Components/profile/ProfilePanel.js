import React, { Component } from "react";
import PrimaryPanel from "../Common/PrimaryPanel";
import UserBar from "../Common/UserBar";
import svg from "../../images/logo.svg";
import MyStats from "./MyStats";
import './profile.css';
import Cookies from "universal-cookie";

export default class ProfilePanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: false,
    }
  }


  componentDidMount() {
    const cookies = new Cookies();
    fetch(process.env.REACT_APP_BACKEND + 'get_user', {
      method: 'post',
      body: JSON.stringify({
        email: cookies.get('user_email'),
      })
    }).then( (response) => {
      return response.json();
    }).then( (data) => {
      if( data.user ) {
        this.setState({
          user: data.user,
        })
      }
    });

    fetch(process.env.REACT_APP_BACKEND + 'get_user_stats', {
      method: 'post',
      body: JSON.stringify({
        email: cookies.get('user_email'),
      })
    }).then( (response) => {
      return response.json();
    }).then( (data) => {
      if( data.status === 'Success' ) {
        this.setState({
          userStats: data.stats
        })
      }
    });
  }

  render() {
    const { user, userStats } = this.state;
    return(
      <div className={'profile-panel'}>
        <PrimaryPanel>
          <div className={'logo-header'}>
            <img src={svg} alt={'logo'}/>
            <h1>SkillPlay</h1>
          </div>
        </PrimaryPanel>
        <PrimaryPanel>
          <UserBar user={user}/>
          <MyStats stats={userStats}/>
        </PrimaryPanel>
      </div>
    );
  }
}