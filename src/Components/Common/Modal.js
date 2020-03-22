import React from "react";
export default function Modal(props) {
  return(
    <div className={'modal'}>
      <div className={'modal-cover'}>
      </div>
      <div className={'modal-body'}>
        {props.children}
      </div>
    </div>
  );
}
