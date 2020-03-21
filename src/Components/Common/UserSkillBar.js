import ProgressBar from "./ProgressBar";
import React from "react";
import python from '../../images/python.png'
import js from '../../images/js.png';
import css from '../../images/css.png';
import html from '../../images/html.png';

export default function UserSkillBar(props) {
  const { skill } = props;
  const { label, level, experience_current, experience_required, type } = skill;
  let percentage;
  if( experience_required === '0') {
    percentage = 0;
  } else {
    percentage = experience_current / experience_required * 100;
  }
  const imageMap = {
    'HTML': html,
    'JavaScript': js,
    'CSS': css,
    'Python': python,
  };

  return(
    <div className={'skill-bar'}>
      <div className={'skill-bar__image'}>
        <img src={imageMap[type] ? imageMap[type] : imageMap.Python } alt={'lang_logo'}/>
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