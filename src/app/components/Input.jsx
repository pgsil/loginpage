import React from 'react';

const Input = props => (
  <div className="input-element">
    <div className="input-label">{props.label}</div>
    <input type={props.type} className="textinput" />
  </div>
);

export default Input;
