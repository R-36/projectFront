import React from "react";
export default function ProgressBar(props) {
  const { filled = 0, type, fillColor } = props;
  let fillGradient = '';
  if( fillColor === 'green' ) {
    fillGradient = 'linear-gradient(to bottom, #44e950, #54e45f 31%, #0c9f11 65%, #06750e)';
  }
  const styles = {
    width: filled + '%',
    backgroundImage: fillGradient,
  };
  let extraClass = '';
  if( type === 'small' ) {
    extraClass = ' progress-bar--small';
  }
  return(
    <div className={'progress-bar ' + extraClass}>
      <div style={styles}
           className={'progress-bar__filled' + (filled === 0 ? ' progress-bar--empty' : '')}
      />
    </div>
  )
}