import React from "react";
import avatar from './../../../images/avatar-placeholder.png';

export default function TriviaPlayerCard({player}) {
  return(
    <div className={'trivia__player-card'}>
      <span className={'trivia__player-card-level'}>{player.level}</span>
      <img src={avatar} alt={'avatar'}>
      </img>
      <div className={'trivia__player-bar'}>
        <div className={'trivia__player-status player-status--' + player.status}>
        </div>
      </div>
      <div className={'trivia__player-nickname'}>{player.nickname}</div>
    </div>
  );
}