import React, {Component} from "react";
import './trivia.css';
import Button from "../../Common/Button";
import TriviaPlayerCard from "./TriviaPlayerCard";
import Trivia from "../../../Controllers/Trivia";

export default class TriviaGame extends Component {

  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answers: [
        'Чайковский', 'Чайковский', 'Чайковский', 'Чайковский'
      ],
      opponents: [],
      time: 15
    }
  }

  tick = () => {
    if( this.state.time !== 0 ) {
      this.setState({time: this.state.time - 1});
    }
  };

  componentDidMount() {
    this.ticker = setInterval( this.tick, 1000 );
  }

  componentWillUnmount() {
    clearInterval(this.ticker);
  }

  render() {
    const { question, answers, opponents, time } = this.state;

    return(
      <div className={'trivia'}>
        <div className={'trivia__time'}>
          {time}
        </div>
        <div className={'trivia__title'}>Вопрос</div>
        <div className={'trivia__question'}>"Кто написал все до единой симфонии Чайковского?"</div>
        <div className={'trivia__tip'}>Выберите ответ:</div>
        <div className={'trivia__answers'}>
          {answers.map( (answer, id) =>
            <Button className={'answer'}
                    onClick={() => Trivia.answer(id)}
            >
              {answer}
            </Button>
          )}
        </div>

        <div className={'trivia__players'}>
          <div className={'trivia__current-player'}>
            <TriviaPlayerCard/>
          </div>
          <div className={'trivia__opponents'}>
            <TriviaPlayerCard/>
            <TriviaPlayerCard/>
            <TriviaPlayerCard/>
          </div>
        </div>

      </div>
    )
  }
}