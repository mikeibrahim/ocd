import React from 'react';
// import panel_small from '../images/panel_small.png';
// import panel_large from '../images/panel_large.png';

export default function Panel(props) {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}