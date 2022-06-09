// text component
import React from 'react';

export default function Text(props) {
  const size = (props.isLarge ? props.lgSize : props.smSize) + 'vw'

  return (
    <div id={props.id} className={"text " + props.className} style={{ fontSize: size }}>
      {props.children}
    </div>
  );
}