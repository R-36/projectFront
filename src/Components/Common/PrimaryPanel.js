import React, {Component} from "react";

export default class PrimaryPanel extends Component {
  render() {
    const { children, loading, className = '', ...rest } = this.props;
    return(
      <div {...rest} className={className + ' primary-panel' + (loading ? ' loading' : '')}>
        {children}
      </div>
    );
  }
}