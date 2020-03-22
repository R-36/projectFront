import React, { Component } from "react";
import PrimaryPanel from "../Common/PrimaryPanel";
import UserBar from "../Common/UserBar";
import svg from "../../images/logo.svg";
import MyStats from "./MyStats";
import './profile.css';
import Cookies from "universal-cookie";
import UserSkills from "./UserSkills";
import Button from "../Common/Button";

export default class ProfilePanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: false,
      userSkills: [],
    }
  }


  componentDidMount() {
    this.update();
    this.ticker = setInterval( this.update, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.ticker);
  }

  update = () => {
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
        });
        cookies.set('nickname', data.user.username);
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

    fetch(process.env.REACT_APP_BACKEND + 'get_user_skills', {
      method: 'post',
      body: JSON.stringify({
        email: cookies.get('user_email'),
      })
    }).then( (response) => {
      return response.json();
    }).then( (data) => {
      if( data.status === 'Success' ) {
        this.setState({
          userSkills: data.skills
        })
      }
    });
  };

  render() {
    const { user, userStats, userSkills } = this.state;
    return(
      <div className={'profile-panel'}>
        <PrimaryPanel>
          <div className={'logo-header'}>
            <img src={svg} alt={'logo'}/>
            <h1>SkillPlay</h1>
          </div>
        </PrimaryPanel>
        <PrimaryPanel style={{padding: '10px 0'}}>
          <UserBar user={user}/>
          <MyStats stats={userStats}/>
          <UserSkills skills={userSkills}/>
        </PrimaryPanel>
        <div>
          <Button onClick={() => alert('Резюме создано. На самом деле нет, но скоро появится и эта возможность.')}
                  style={{width:'242px'}}
          >
            Создать резюме
          </Button>
          <Button onClick={() => alert('Курс создан. На самом деле нет, но скоро появится и эта возможность.')}
                  style={{width:'242px'}}
          >
            Создать курс
          </Button>
        </div>
      </div>
    );
  }
}