import React, {Component} from "react";
import Button from "../Common/Button";
import backgroundLeftTop from '../../images/skilltree1.png';
import backgroundRightTop from '../../images/skilltree2.png';
import backgroundLeftBottom from '../../images/skilltree3.png';
import backgroundRightBottom from '../../images/skilltree4.png';
import Chat from "../chat/Chat";
import Modal from "../Common/Modal";
import Trivia from "../../Controllers/Trivia";
import SocketIO from "../../Controllers/SocketIO";


export default class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      triviaModal: false,
      playersRemaining: 4
    }
  }

  componentDidMount() {
    this.ticker = setInterval( this.tick, 1000 );
    SocketIO.subscribe('trivia_update', this.listenServer );
  }

  componentWillUnmount() {
    clearInterval(this.ticker);
    SocketIO.unsubscribe('trivia_update', this.listenServer )
  }

  listenServer = (data) => {
    if( data.game_status === 'lobby' ) {
      this.setState({playersRemaining: 4 - data.user_count})
    }
    if( data.game_status === 'start' ) {
      this.props.switchPage('trivia', {initialGame: data});
    }
  };

  render() {
    const { triviaModal, playersRemaining } = this.state;
    const { switchPage } = this.props;

    const modules = [
      {
        name: 'skilltree',
        label: 'Дерево умений',
        description: 'Выберите свое направление! Откройте дерево навыков и посмотрите, что можно изучить дальше.',
        background: backgroundLeftTop,
        backgroundPosition: '-369px -211px',
        onClick: () => switchPage('skilltree')
      },
      {
        name: 'trivia',
        label: 'Викторина',
        description: 'Сразитесь с другими игроками и получайте SkillPoint!',
        background: backgroundRightTop,
        backgroundPosition: '0px -211px',
        gradient: 'linear-gradient(226deg, #7045af 35%, rgba(56, 35, 88, 0) 153%)',
        onClick: () => {
          this.setState({triviaModal: true});
          Trivia.join();
        },
        btnLabel: 'Начать'
      },
      {
        name: 'skillbuild',
        label: 'Скилл билд',
        description: 'Нужен совет от профессионалов в области? Специалисты предложат вам готовые комбинации курсов.',
        background: backgroundLeftBottom,
        backgroundPosition: '-373px 0px',
        gradient: 'linear-gradient(49deg, #7045af 35%, rgba(56, 35, 88, 0) 153%)'
      },
      {
        name: 'single-course',
        label: 'Пример курса',
        description: 'Пример курса.',
        background: backgroundRightBottom,
        backgroundPosition: '-315px 0px',
        gradient: 'linear-gradient(315deg, #7045af 35%, rgba(56, 35, 88, 0) 153%)',
        onClick: () => switchPage('singleCourse')
      }
    ];

    return (
      <div className={'navigation'}>
        {triviaModal &&
        <Modal>
          <div className={'modal-message'}>
            Подождите, пока наберется {playersRemaining} игрока...
          </div>
          <Button onClick={() => {
            this.setState({triviaModal: false});
            Trivia.leave();
          }}>
            Отмена
          </Button>
        </Modal>
        }

        <div className={'navigation__inner'}>
          {modules.map((module, key) =>
            <div key={key} style={{
              backgroundImage: module.background ? 'url("' + module.background + '")' : '',
              backgroundPosition: module.backgroundPosition ? module.backgroundPosition : '',
            }} className={'navigation__item'}>
              <div style={{backgroundImage: module.gradient ? module.gradient : ''}}
                   className={'navigation__item-inner'}
              >
                <div className={'navigation__item-title'}>
                  {module.label}
                </div>
                <div className={'navigation__item-description'}>
                  {module.description}
                </div>
                <Button className={'navigation-btn'}
                        type={'active'}
                        onClick={module.onClick}
                >
                  {module.btnLabel ? module.btnLabel : 'Открыть'}
                </Button>
              </div>
            </div>
          )}
        </div>
        <Chat/>
      </div>
    )
  }
}