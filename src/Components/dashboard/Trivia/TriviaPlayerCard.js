import React from "react";
import avatar from './../../../images/avatar-placeholder.png';

export default function TriviaPlayerCard(props) {
  return(
    <div className={'trivia__player-card'}>
      <span className={'trivia__player-card-level'}>{1}</span>
      <img src={avatar} alt={'avatar'}>
      </img>
      <div className={'trivia__player-bar'}>
        <div className={'trivia__player-status'}>
        </div>
      </div>
      <div className={'trivia__player-nickname'}>Selean</div>
    </div>
  );
}