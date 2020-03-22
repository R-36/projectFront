import React, {Component} from "react";
import map from '../../../images/MAP_2x.png';
import './skilltree.css';
import PrimaryPanel from "../../Common/PrimaryPanel";
import ScrollContainer from "react-indiana-drag-scroll";
import {TransformWrapper, TransformComponent} from "react-zoom-pan-pinch";

export default class SkillTree extends Component {


  render() {
    console.log('url("' + map + '")');
    //style={{backgroundImage: 'url("' + map + '")'}}
    return(
      <div className={'skilltree'}>
        <TransformWrapper scale={4}
                          defaultPositionX={-2500}
                          defaultPositionY={-2000}
        >
          <TransformComponent>
            <img src={map} alt={'map'}/>
          </TransformComponent>
        </TransformWrapper>
      </div>

    );
  }
}