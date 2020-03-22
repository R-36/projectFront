import React from "react";
import PrimaryPanel from "../Common/PrimaryPanel";
import Button from "../Common/Button";
import sp from '../../images/SP.svg';
import spGold from '../../images/SPGOLD.svg';
import arrowDown from '../../images/arrow_down.svg';
import shoppingCart from '../../images/shopping.svg';

const pageMap = {
  'trivia': 'Викторина',
  'navigation': 'Главная страница',
  'skilltree': 'Дерево умений',
};

export default function ScreenHeader({back, page, goBack}) {
  return(
    <div className={'screen-header'}>
      <PrimaryPanel className={'screen-header__page-title'}>
        {back &&
          <Button className={'btn-go-back'} onClick={ () => goBack() }>
            Назад
          </Button>
        }

        <div className={'screen-header__name'}>
          {pageMap[page]}
        </div>
      </PrimaryPanel>
      <PrimaryPanel className={'screen-header__skill-points'}>
        <div className={'skill-points'}>
          <img src={sp} alt={'sp'}/>
          <div>
            16000
          </div>
        </div>
        <div className={'skill-points-gold'}>
          <img src={spGold} alt={'sp'}/>
          <div>
            16
          </div>
        </div>
        <Button className={'btn-shopping'}><span>В магазин</span><img src={shoppingCart} alt={'cart'}/></Button>
      </PrimaryPanel>
      <PrimaryPanel className={'screen-header__menu'}>
        <Button className={'btn-settings'}>
          <img src={arrowDown} alt={'shevron'}/>
        </Button>
      </PrimaryPanel>
    </div>
  )
}