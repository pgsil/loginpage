import React from 'react';

const borderColorClass = (bool, str) => {
  if (str !== undefined && str.length === 0 && bool !== undefined) {
    return '';
  }
  if (bool !== undefined) {
    return bool ? 'valid-input' : 'invalid-input';
  }
  return '';
};

/* eslint-disable jsx-a11y/label-has-for */
/* it's not working, don't forget to find out why */
const Input = props => (
  <div className="input-element">
    <label htmlFor={props.label} className="input-label">
      {props.label}
    </label>
    <input
      id={props.label}
      autoComplete={props.autocomplete}
      type={props.type || 'text'}
      className={`textinput ${borderColorClass(props.validInput, props.inputValue)}`}
      onChange={(e) => {
        if (props.onChange && props.onChange.fn) {
          console.log('im here');
          props.onChange.fn.apply(null, [e.target.value, ...props.onChange.args]);
        }
      }}
    />
  </div>
);

export default Input;
