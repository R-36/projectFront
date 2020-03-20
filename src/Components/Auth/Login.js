import svg from "../../images/icon.svg";
import Button from "../Common/Button";
import PrimaryPanel from "../Common/PrimaryPanel";
import React from "react";
import {Link} from "react-router-dom";


export default function Login(props) {
  const { switchTab } = props;
  return(
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
        />
      </div>
      <div>
        <input type={'password'}
               name={'password'}
               placeholder={'Пароль'}
        />
      </div>
      <div className={'auth-window__forgot-pass'}>Забыли пароль?</div>
      <div>
        <Button onClick={switchTab}>
          Создайте аккаунт
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