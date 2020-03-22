import React, { Component } from "react";
import './single.css';
import PrimaryPanel from "../../Common/PrimaryPanel";
import sp from '../../../images/SP.svg'
import timer from '../../../images/timer.svg'
import Button from "../../Common/Button";

export default function SingleCourse() {
  return(
    <PrimaryPanel style={{margin: '0'}}>
      <div className={'course'}>
        <div className={'course__title'}>Курс: "Мобильная разработка"</div>
        <div className={'course__body'} style={{display: 'flex'}}>
          <div className={'course__left'}>
            <div className={'course__video'}>
              <iframe width="700" height="393" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>

              </iframe>
            </div>
            <div className={'course__description-wrap'}>
              <div className={'course__description-header'}>Подробное описание</div>
              <div className={'course__description'}>Подробное описание Подробное описание Подробное описание Подробное описание Подробное описание Подробное описание Подробное описание Подробное описаниеПодробное описаниеПодробное описаниеПодробное описание</div>
            </div>
          </div>
          <div className={'course__right'}>
            <div className={'course__info'}>
              <div className={'course__heading'}>Награда за прохождение курса</div>
              <div className={'course__subtitle'}>
                1000xp в "Мобильная разработка"
              </div>
              <br/>
              <div className={'course__heading'}>Цена</div>
              <div className={'course__subtitle'}>6000₽</div>
              <div className={'course__heading'}>Или</div>
              <div className={'course__subtitle'}>3000₽ + <img className={'course__sp'} src={sp} alt={'sp'}/> 3000</div>
              <Button type={'active'}
                      className={'btn-buy-course'}
              >
                Приобрести
              </Button>
            </div>
            <div className={'course__content'}>
              <div className={'course__lesson'}>1. Введение <img className={'course__timer'} src={timer} alt={'timer'}/> <span className={'course__time'}>2:00</span></div>
              <div className={'course__lesson'}>2. Заметка к заданиям<img className={'course__timer'} src={timer} alt={'timer'}/> <span className={'course__time'}>2:00</span></div>
              <div className={'course__lesson'}>3. Знакомство с платформой<img className={'course__timer'} src={timer} alt={'timer'}/> <span className={'course__time'}>2:00</span></div>
              <div className={'course__lesson'}>4. XML разметка<img className={'course__timer'} src={timer} alt={'timer'}/> <span className={'course__time'}>2:00</span></div>
            </div>
          </div>
        </div>


      </div>
    </PrimaryPanel>

  );
}