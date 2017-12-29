import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updatePassword } from '../services/login/actions';

import PasswordRequirement from './PasswordRequirement';

const borderColorClass = (bool, str) => {
  if (str !== undefined && str.length === 0 && bool !== undefined) {
    return '';
  }
  if (bool !== undefined) {
    return bool ? 'valid-input' : 'invalid-input';
  }
  return '';
};

const passwordStrengthCounter = (pwdStrength) => {
  let count = 0;

  Object.keys(pwdStrength.tests).forEach((el) => {
    if (pwdStrength.tests[el] === true) {
      count += 1;
    }
  });

  switch (count) {
    case 1:
      return [
        <div className="password-strength-indicator pwd-strength-red" key="pwdstrindicator1" />,
        <div className="password-strength-indicator pwd-strength-gray" key="pwdstrindicator2" />,
        <div className="password-strength-indicator pwd-strength-gray" key="pwdstrindicator3" />,
      ];
    case 2:
      return [
        <div className="password-strength-indicator pwd-strength-yellow" key="pwdstrindicator1" />,
        <div className="password-strength-indicator pwd-strength-yellow" key="pwdstrindicator2" />,
        <div className="password-strength-indicator pwd-strength-gray" key="pwdstrindicator3" />,
      ];
    case 3:
      return [
        <div className="password-strength-indicator pwd-strength-green" key="pwdstrindicator1" />,
        <div className="password-strength-indicator pwd-strength-green" key="pwdstrindicator2" />,
        <div className="password-strength-indicator pwd-strength-green" key="pwdstrindicator3" />,
      ];

    default:
      return [
        <div className="password-strength-indicator pwd-strength-gray" key="pwdstrindicator1" />,
        <div className="password-strength-indicator pwd-strength-gray" key="pwdstrindicator2" />,
        <div className="password-strength-indicator pwd-strength-gray" key="pwdstrindicator3" />,
      ];
  }
};

/* eslint-disable jsx-a11y/label-has-for */
/* it's not working, don't forget to find out why */
const PasswordInput = props => (
  <div className="input-element password-form">
    <label htmlFor="new-password" className="input-label">
      {props.label}
    </label>
    <input
      id="new-password"
      autoComplete="new-password"
      type="password"
      className={`textinput textinput-pwd ${borderColorClass(
        props.password.valid,
        props.password.value,
      )}`}
      onChange={(e) => {
        props.updatePassword(e.target.value);
      }}
    />
    <div className="password-strength">
      {passwordStrengthCounter(props.password.passwordStrength)}
    </div>
    <PasswordRequirement label="Pelo menos 6 caracteres" test="isLengthValid" />
    <PasswordRequirement label="Pelo menos 1 letra maiúscula" test="hasUpperCase" />
    <PasswordRequirement label="Pelo menos 1 número" test="hasNumber" />
  </div>
);

const mapStateToProps = ({ login }, ownProps) =>
  Object.assign(
    {},
    {
      password: login.password,
    },
    ownProps,
  );

const mapDispatchToProps = dispatch => bindActionCreators({ updatePassword }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PasswordInput);
