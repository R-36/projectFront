import React from "react";
export default function ProgressBar(props) {
  const { filled } = props;
  const styles = {
    width: filled + '%',
  };

  return(
    <div className={'progress-bar'}>
      <div style={styles}
           className={'progress-bar__filled'}
      />
    </div>
  )
}