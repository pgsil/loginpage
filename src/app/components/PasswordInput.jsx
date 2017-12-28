import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updatePassword } from '../services/login/actions';

import PasswordRequirement from './PasswordRequirement';

const passwordInputColor = (password) => {
  if (password.value.length === 0) {
    return '#b6b9d0';
  }
  if (password.passwordStrength.valid) {
    return '#17D499';
  }
  return '#F79682';
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
        <div className="password-strength-indicator pwd-strength-red" />,
        <div className="password-strength-indicator pwd-strength-gray" />,
        <div className="password-strength-indicator pwd-strength-gray" />,
      ];
    case 2:
      return [
        <div className="password-strength-indicator pwd-strength-yellow" />,
        <div className="password-strength-indicator pwd-strength-yellow" />,
        <div className="password-strength-indicator pwd-strength-gray" />,
      ];
    case 3:
      return [
        <div className="password-strength-indicator pwd-strength-green" />,
        <div className="password-strength-indicator pwd-strength-green" />,
        <div className="password-strength-indicator pwd-strength-green" />,
      ];

    default:
      return [
        <div className="password-strength-indicator pwd-strength-gray" />,
        <div className="password-strength-indicator pwd-strength-gray" />,
        <div className="password-strength-indicator pwd-strength-gray" />,
      ];
  }
};

const PasswordInput = props => (
  <div className="input-element">
    <div className="input-label">{props.label}</div>
    <input
      type="password"
      className="textinput textinput-pwd"
      style={{
        borderColor: passwordInputColor(props.password),
      }}
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
