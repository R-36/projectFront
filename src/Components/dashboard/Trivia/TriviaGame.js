import React, {Component} from "react";
import './trivia.css';
import Button from "../../Common/Button";
import TriviaPlayerCard from "./TriviaPlayerCard";
import Trivia from "../../../Controllers/Trivia";
import SocketIO from "../../../Controllers/SocketIO";
import cookies from "../../../Controllers/Cookies";

export default class TriviaGame extends Component {

  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answers: [
        'Чайковский', 'Чайковский', 'Чайковский', 'Чайковский'
      ],
      opponents: [],
      time: 15,
      game: props.initialGame ? props.initialGame : {}
    }
  }

  tick = () => {
    if( this.state.time !== 0 ) {
      this.setState({time: this.state.time - 1});
    }
  };

  componentDidMount() {
    this.ticker = setInterval( this.tick, 1000 );
    SocketIO.subscribe('trivia_update', this.listenServer );
  }

  componentWillUnmount() {
    clearInterval(this.ticker);
    SocketIO.unsubscribe('trivia_update', this.listenServer )
  }

  listenServer = (data) => {
    console.log(data);
    this.setState({game: data});
  };

  parsePlayers(players) {
    const current = cookies.get('nickname');
    let parsed = { current: false, opponents: []};
    console.log(current);
    for( let [index, player] of Object.entries(players) ) {
      console.log(player);
      if( !parsed.current && player.nickname === current ) {
        parsed.current = player;
      } else {
        parsed.opponents.push(player);
      }
    }

    return parsed;
  }

  render() {
    const {time, game } = this.state;
    const { question = {}, game_status, players = [], answers = []} = game;

    const parsedPlayers = this.parsePlayers(players);
console.log(parsedPlayers);
    return(
      <div className={'trivia'}>
        <div className={'trivia__time'}>
          {time}
        </div>
        <div className={'trivia__title'}>Вопрос</div>
        <div className={'trivia__question'}>{question.question}</div>
        <div className={'trivia__tip'}>Выберите ответ:</div>
        {question.answers &&
          <div className={'trivia__answers'}>
            {question.answers.map( (answer, id) =>
              <Button className={'answer'}
                      onClick={() => Trivia.answer(id)}
              >
                {answer}
              </Button>
            )}
          </div>
        }


        <div className={'trivia__players'}>
          <div className={'trivia__current-player'}>
            <TriviaPlayerCard player={parsedPlayers.current}/>
          </div>
          <div className={'trivia__opponents'}>
            {parsedPlayers.opponents.map( (player) =>
              <TriviaPlayerCard player={player}/>
            )}
          </div>
        </div>

      </div>
    )
  }
}