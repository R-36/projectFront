import svg from "../../images/icon.svg";
import Button from "../Common/Button";
import PrimaryPanel from "../Common/PrimaryPanel";
import React, { Component } from "react";
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom'

const cookies = new Cookies();

export default class Register extends Component {

  nickname = '';
  email = '';
  password = '';
  passwordRepeat = '';

  constructor(props) {
    super(props);
    this.state = {
      registered: false,
      errors: [],
    }
  }

  register = () => {
    if( !this.validate() ) {
      return;
    }
    this.setState({requesting: true});
    fetch(process.env.REACT_APP_BACKEND + 'create_user', {
      method: 'post',
      body: JSON.stringify({
        nickname: this.nickname,
        email: this.email,
        password: this.password,
      })
    }).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({requesting: false});
      if( data.status === 'Success' ) {
        cookies.set('authenticated', 'true');
        cookies.set('user_email', this.email);
        document.location = '/';
      } else if( data.status === 'Failed' ) {
        this.setState({errors: [data.message] } )
      } else {
        this.setState({errors: ['No connection to service']});
      }
    });
  };

  validate = () => {
    let errors = [];
    if( !this.email ) {
      errors.push('Пожалуйста, введите E-mail.');
    } else if( !this.validateEmail(this.email) ) {
      errors.push('Пожалуйста, введите корректный E-mail.');
    }
    if( !this.nickname ) {
      errors.push('Пожалуйста, введите псевдоним');
    } else if( this.nickname.length < 4 || this.nickname.length > 16 ) {
      errors.push('Длина псевдонима должны быть в пределах 4-16');
    }
    if( !this.password ) {
      errors.push('Пожалуйста, введите пароль.');
    } else if( this.password.length < 6 ) {
      errors.push('Длина пароля должны быть больше 6');
    }
    if( this.passwordRepeat !== this.password ) {
      errors.push('Пароли должны совпадать.');
    }

    this.setState({errors: errors});
    return !errors.length;
  };

  validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

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
                 onChange={(e) => this.passwordRepeat = e.target.value}
          />
        </div>
        <div className={'auth-window__forgot-pass'}>Забыли пароль?</div>
        <div className={'errors'}>{
          errors.map( (error, index) => <div key={index}>{error}</div> )
        }</div>
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