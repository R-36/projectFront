import React, {Component} from "react";

export default class PrimaryPanel extends Component {
  render() {
    const { children, loading, ...rest } = this.props;
    return(
      <div {...rest} className={'primary-panel' + (loading ? ' loading' : '')}>
        {children}
      </div>
    );
  }
}