import svg from "../../images/icon.svg";
import Button from "../Common/Button";
import PrimaryPanel from "../Common/PrimaryPanel";
import React from "react";
import {Link} from "react-router-dom";


export default function Register(props) {
  const { switchTab } = props;
  return(
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
        />
      </div>
      <div>
        <input type={'email'}
               name={'email'}
               placeholder={'E-mail'}
        />
      </div>
      <div>
        <input type={'password'}
               name={'password'}
               placeholder={'Пароль'}
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
        <Link to={'/dashboard'}>
          <Button type={'active'}>
            Войти
          </Button>
        </Link>

      </div>
    </PrimaryPanel>
  );
}