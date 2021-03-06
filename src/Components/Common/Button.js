import React from "react";

export default function Button(props) {
  const { type = 'primary', onClick, children, className, style } = props;
  let btnClass = 'btn ' + ( className ? className : '' ) ;
  if( type ) {
    btnClass += ' btn-' + type;
  }
  return(
    <button className={btnClass}
            onClick={onClick}
            style={style}
    >
      {children}
    </button>
  );
}