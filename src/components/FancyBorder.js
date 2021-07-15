import React from 'react';
import './FancyBorder.css';

function FancyBorder(props) {
  return (
    <div className={'fancy-border fancy-border' + props.color}>
      {props.children}
    </div>
  );
}

export default FancyBorder;
