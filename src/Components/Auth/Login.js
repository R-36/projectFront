import svg from "../../images/icon.svg";
import Button from "../Common/Button";
import PrimaryPanel from "../Common/PrimaryPanel";
import React, {Component} from "react";
import Cookies from "universal-cookie";
import { Redirect } from 'react-router-dom';

const cookies = new Cookies();

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      errors: false,
    }
  }

  login = () => {
    fetch(process.env.REACT_APP_BACKEND + 'login_user', {
      method: 'post',
      body: JSON.stringify({
        email: this.email,
        password: this.password,
      })
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      if( data.status === 'Success' ) {
        cookies.set('authenticated', 'true');
        cookies.set('user_email', this.email);
        document.location = '/';
      } else if (data.status === 'Failed') {
        this.setState({errors: data.message } );
      } else {
        this.setState({errors: 'No connection to service'});
      }
    });
  };

  render() {
    const { switchTab } = this.props;
    const { authenticated, errors } = this.state;

    if( authenticated ) {
      console.log('redir');
      return(
        <Redirect to={'/dashboard'}/>
      );
    }
    return (
      <PrimaryPanel>
        <div className={'auth-window__head'}>
          <img src={svg} alt={'logo'}/>
          <h1>SkillPlay</h1>
        </div>
        <div className={'auth-window__msg'}>
          Войдите в аккаунт
        </div>
        <div>
          <input type={'email'}
                 name={'email'}
                 placeholder={'E-mail'}
                 onChange={(e) => this.email = e.target.value}
          />
        </div>
        <div>
          <input type={'password'}
                 name={'password'}
                 placeholder={'Пароль'}
                 onChange={(e) => this.password = e.target.value}
          />
        </div>
        <div className={'auth-window__forgot-pass'}>Забыли пароль?</div>
        <div className={'errors'}>{errors}</div>
        <div>
          <Button onClick={switchTab}>
            Создайте аккаунт
          </Button>
          <Button type={'active'} onClick={this.login}>
            Войти
          </Button>
        </div>
      </PrimaryPanel>
    );
  }
}