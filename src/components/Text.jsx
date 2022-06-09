// text component
import React from 'react';

export default function Text(props) {
  const size = (props.isLarge ? props.lgSize : props.smSize) + 'vw'

  return (
    <div className={props.className} style={{ fontSize: size }}>
      {props.children}
    </div>
  );
}