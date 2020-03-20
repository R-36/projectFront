import React from "react";

export default function Button(props) {
  const { type = 'primary', onClick, children } = props;
  let btnClass = 'btn';
  if( type ) {
    btnClass += ' btn-' + type;
  }
  return(
    <button className={btnClass}
            onClick={onClick}
    >
      {children}
    </button>
  );
}