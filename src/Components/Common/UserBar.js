import placeholder from './../../images/avatar-placeholder.png';
import React from "react";
import ProgressBar from "./ProgressBar";

export default function UserBar(props) {
  const { user } = props;
  let percentage;
  if( !user.experience_next ) {
    percentage = 0;
  } else {
    percentage = user.experience_act/user.experience_next * 100;
  }

  let avatar = placeholder;
  return(
    <div className={'user-bar'}>
      <div className={'user-bar__avatar'}>
        <span className={'user-bar__level'}>{user.user_level}</span>
        <img src={avatar} alt={'avatar'}/>
      </div>
      <div className={'user-bar__body'}>
        <div className={'user-bar__nickname'}>
          {user.username}
        </div>
        <div className={'user-bar__experience'} >
          <div className={'user-bar__experience-bar'}>
            <ProgressBar filled={percentage}/>
          </div>
        </div>
        <span className={'user-bar__experience-info'}>
          {user.experience_act} / {user.experience_next}
        </span>
      </div>
    </div>
  );
}