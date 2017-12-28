import React from 'react';
import { connect } from 'react-redux';

const passwordRequirementCalc = (hasPassword, test) => {
  if (!hasPassword) {
    return <span className="password-strength-requirement pwd-strength-gray" />;
  } else if (!test) {
    return <span className="password-strength-requirement pwd-strength-red" />;
  }
  return <span className="password-strength-requirement pwd-strength-green" />;
};

const PasswordRequirement = props => (
  <div className="password-requirement">
    {passwordRequirementCalc(props.hasPassword, props.testObj)}
    <div className="password-requirement-label">{props.label}</div>
  </div>
);

const mapStateToProps = ({ login }, ownProps) =>
  Object.assign(
    {},
    {
      hasPassword: login.password.value.length > 0,
      testObj: login.password.passwordStrength.tests[ownProps.test],
    },
    ownProps,
  );

export default connect(mapStateToProps)(PasswordRequirement);
