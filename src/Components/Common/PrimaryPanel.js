import React, {Component} from "react";

export default class PrimaryPanel extends Component {
  render() {
    const { children, loading } = this.props;
    return(
      <div className={'primary-panel' + (loading ? ' loading' : '')}>
        {children}
      </div>
    );
  }
}