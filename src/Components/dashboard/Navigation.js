import React, {useState} from "react";
import Button from "../Common/Button";
import backgroundLeftTop from '../../images/skilltree1.png';
import backgroundRightTop from '../../images/skilltree2.png';
import backgroundLeftBottom from '../../images/skilltree3.png';
import backgroundRightBottom from '../../images/skilltree4.png';
import Chat from "../chat/Chat";
import SocketIO from "../../Controllers/SocketIO";
import cookies from "../../Controllers/Cookies";
import Modal from "../Common/Modal";
import Trivia from "../../Controllers/Trivia";


export default function Navigation() {

  console.log('rerender');
  const [triviaModal, setModal] = useState(false);
console.log(triviaModal);
  const modules = [
    {
      name: 'skilltree',
      label: 'Дерево умений',
      description: 'Выберите свое направление! Откройте дерево навыков и посмотрите, что можно изучить дальше.',
      background: backgroundLeftTop,
      backgroundPosition: '-369px -211px',
    },
    {
      name: 'skilltree',
      label: 'Викторина',
      description: 'Сразитесь с другими игроками и получайте SkillPoint!',
      background: backgroundRightTop,
      backgroundPosition: '0px -211px',
      gradient: 'linear-gradient(226deg, #7045af 35%, rgba(56, 35, 88, 0) 153%)',
      onClick: () => {
        setModal(true);
        Trivia.join();
      }
    },
    {
      name: 'skilltree',
      label: 'Скилл билд',
      description: 'Нужен совет от профессионалов в области? Специалисты предложат вам готовые комбинации курсов.',
      background: backgroundLeftBottom,
      backgroundPosition: '-373px 0px',
      gradient: 'linear-gradient(49deg, #7045af 35%, rgba(56, 35, 88, 0) 153%)'
    }
  ];

  return(
    <div className={'navigation'}>
      {triviaModal &&
        <Modal>
          <div className={'modal-message'}>
            Подождите, пока наберется 4 игрока...
          </div>
          <Button onClick={() => {
            setModal(false);
            Trivia.leave();
          } }>
            Отмена
          </Button>
        </Modal>
      }

      <div className={'navigation__inner'}>
        {modules.map( (module, key) =>
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
                Открыть
              </Button>
            </div>
          </div>
        )}
      </div>
      <Chat/>
    </div>
  )
}