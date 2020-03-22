import React, {Component} from "react";
import ScreenHeader from "./ScreenHeader";
import Navigation from "./Navigation";
import TriviaGame from "./Trivia/TriviaGame";
import SkillTree from "./SkillTree/SkillTree";


export default class MainScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 'navigation',
    }
  }

  render() {
    const {page, props} = this.state;
    return(
      <div className={'main-screen'}>
        <ScreenHeader back={page !== 'navigation'}
                      page={page}
                      goBack={ () => this.setState({page: 'navigation'})}
        />
        {}
        {page === 'navigation' ?  <Navigation switchPage={(page, props) => this.setState({page, props}) }/> : ''}
        {page === 'trivia' ? <TriviaGame {...props}/> : ''}
        {page === 'skilltree' ? <SkillTree/> : ''}
      </div>
    )
  }
}