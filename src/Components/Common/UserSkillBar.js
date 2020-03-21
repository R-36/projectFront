import ProgressBar from "./ProgressBar";
import React from "react";
import placeholder from '../../images/python.png'

export default function UserSkillBar(props) {
  const { skill } = props;
  const { label, level, experience_current, experience_required } = skill;
  let percentage;
  if( experience_required === '0') {
    percentage = 0;
  } else {
    percentage = experience_current / experience_required * 100;
  }

  return(
    <div className={'skill-bar'}>
      <div className={'skill-bar__image'}>
        <img src={placeholder} alt={'lang_logo'}/>
      </div>
      <div className={'skill-bar__body'}>
        <div className={'skill-bar__title'}>{label}</div>
        <div className={'skill-bar__progress'} >
          <div className={'user-bar__progress-bar'}>
            <ProgressBar filled={percentage}
                         type={'small'}
                         fillColor={'green'}
            />
          </div>
        </div>
        <div className={'skill-bar__progress-info'}>
          <span className={'skill-bar__level'}>Уровень {level}</span>
          <span className={'skill-bar__exp'}>{experience_current}/{experience_required}</span>
        </div>
      </div>
    </div>
  );
}