import React from 'react';

const Input = props => (
  <div className="input-element">
    <div className="input-label">{props.label}</div>
    <input
      type={props.type || 'text'}
      className="textinput"
      onChange={(e) => {
        if (props.onChange && props.onChange.fn) {
          props.onChange.fn.apply(null, [e.target.value, ...props.onChange.args]);
        }
      }}
    />
  </div>
);

export default Input;
