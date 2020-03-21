import avatar from './../../images/avatar-placeholder.png';
import React from "react";
import ProgressBar from "./ProgressBar";

export default function UserBar(props) {
  const { user } = props;
  const percentage = user.expProgress.current/user.expProgress.required * 100;
  return(
    <div className={'user-bar'}>
      <div className={'user-bar__avatar'}>
        <span className={'user-bar__level'}>{user.level}</span>
        <img src={avatar} alt={'avatar'}/>
      </div>
      <div className={'user-bar__body'}>
        <div className={'user-bar__nickname'}>
          {user.nickname}
        </div>
        <div className={'user-bar__experience'} >
          <div className={'user-bar__experience-bar'}>
            <ProgressBar filled={percentage}/>
          </div>
        </div>
        <span className={'user-bar__experience-info'}>{user.expProgress.current} / {user.expProgress.required}</span>
      </div>
    </div>
  );
}