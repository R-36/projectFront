import React, {Component} from "react";
import ScreenHeader from "./ScreenHeader";
import Navigation from "./Navigation";
import TriviaGame from "./Trivia/TriviaGame";


export default class MainScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 'trivia',
    }
  }

  render() {
    const {page} = this.state;
    return(
      <div className={'main-screen'}>
        <ScreenHeader back={page !== 'navigation'}
                      page={page}
                      goBack={ () => this.setState({page: 'navigation'})}
        />
        {page === 'navigation' ?  <Navigation/> : <TriviaGame/>}
      </div>
    )
  }
}