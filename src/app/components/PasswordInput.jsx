import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updatePassword } from '../services/login/actions';

const passwordInputColor = (pwdStrength) => {
  if (pwdStrength.valid) {
    return '#17D499';
  }
  return '#F79682';
};

const passwordStrengthCounter = (pwdStrength) => {
  let count = 0;

  Object.keys(pwdStrength.tests).forEach((el) => {
    if (el === true) {
      count += 1;
    }
  });

  switch (count) {
    case 1:
      return [
        <div className="pwd-strength-red" />,
        <div className="pwd-strength-gray" />,
        <div className="pwd-strength-gray" />,
      ];
    case 2:
      return [
        <div className="pwd-strength-yellow" />,
        <div className="pwd-strength-yellow" />,
        <div className="pwd-strength-gray" />,
      ];
    case 3:
      return [
        <div className="pwd-strength-green" />,
        <div className="pwd-strength-green" />,
        <div className="pwd-strength-green" />,
      ];

    default:
      return [
        <div className="pwd-strength-gray" />,
        <div className="pwd-strength-gray" />,
        <div className="pwd-strength-gray" />,
      ];
  }
};

const PasswordInput = props => (
  <div className="input-element">
    <div>{props.label}</div>
    <input
      type={props.type}
      className="textinput"
      style={{
        borderColor: passwordInputColor(props.password.passwordStrength),
      }}
      onChange={(e) => {
        props.updatePassword(e.target.value);
      }}
    />
    <div className="password-strength">
      {passwordStrengthCounter(props.password.passwordStrength)}
    </div>
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
