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
      opponents: [],
      time: 15,
      game: props.initialGame ? props.initialGame : {},
      selectedAnswer: null,
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
    this.setState({game: data});
  };

  parsePlayers(players) {
    const current = cookies.get('nickname');
    let parsed = { current: false, opponents: []};
    for( let [index, player] of Object.entries(players) ) {
      if( !parsed.current && player.nickname === current ) {
        parsed.current = player;
      } else {
        parsed.opponents.push(player);
      }
    }

    return parsed;
  }

  render() {
    const {time, game, selectedAnswer } = this.state;
    const { question = {}, game_status, players = []} = game;

    const parsedPlayers = this.parsePlayers(players);
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
              <Button className={'answer' + (id === selectedAnswer ? ' selected' : '')}
                      onClick={() => {
                        if( selectedAnswer ) {
                          return;
                        }
                        Trivia.answer(id);
                       this.setState({selectedAnswer: id});
                      }}
                      key={id}
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
            {parsedPlayers.opponents.map( (player, index) =>
              <TriviaPlayerCard key={index} player={player}/>
            )}
          </div>
        </div>

      </div>
    )
  }
}