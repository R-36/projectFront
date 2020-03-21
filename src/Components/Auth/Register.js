import svg from "../../images/icon.svg";
import Button from "../Common/Button";
import PrimaryPanel from "../Common/PrimaryPanel";
import React, { Component } from "react";
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom'

const cookies = new Cookies();

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      registered: false,
      errors: false,
    }
  }

  register = () => {
    if( !this.validate() ) {
      return;
    }
    fetch(process.env.REACT_APP_BACKEND + '/create_user', {
      method: 'post',
      body: JSON.stringify({
        nickname: this.nickname,
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
      } else {
        this.setState({errors: data.message } )
      }
    });
  };

  validate = () => {
    return true;
  };

  render() {
    const { switchTab } = this.props;
    const { errors, registered } = this.state;

    if( registered ) {
      return(
        <Redirect to={'/dashboard'}/>
      )
    }

    return (
      <PrimaryPanel>
        <div className={'auth-window__head'}>
          <img src={svg} alt={'logo'}/>
          <h1>SkillPlay</h1>
        </div>
        <div className={'auth-window__msg'}>
          Создайте аккаунт
        </div>
        <div>
          <input type={'text'}
                 name={'nickname'}
                 placeholder={'Псевдоним'}
                 onChange={(e) => this.nickname = e.target.value}
          />
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
        <div>
          <input type={'password'}
                 name={'password-repeat'}
                 placeholder={'Повторите пароль'}
          />
        </div>
        <div className={'auth-window__forgot-pass'}>Забыли пароль?</div>
        <div className={'_register'}>
          <Button onClick={switchTab}>
            У меня уже есть аккаунт
          </Button>

          <Button type={'active'} onClick={this.register}>
            Войти
          </Button>
        </div>
      </PrimaryPanel>
    );
  }
}