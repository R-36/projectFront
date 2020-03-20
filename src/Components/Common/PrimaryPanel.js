import React, {Component} from "react";

export default class PrimaryPanel extends Component {
  render() {
    return(
      <div className={'primary-panel'}>
        {this.props.children}
      </div>
    );
  }
}