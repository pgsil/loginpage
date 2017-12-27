import types from '../types';

export const updateLogin = obj => (dispatch) => {
  dispatch({
    type: types.LOGIN_UPDATE,
    data: obj,
  });
};

export const updatePassword = str => (dispatch) => {
  const isLengthValid = str.length >= 6;
  const hasUpperCase = str !== str.toLowerCase();
  const hasNumber = /\d/.test(str);

  let value = [isLengthValid, hasUpperCase, hasNumber].filter(el => el === true);
  console.log(value);
  value = value.length;

  const pwd = {
    value: str,
    passwordStrength: {
      value,
      tests: {
        isLengthValid,
        hasUpperCase,
        hasNumber,
      },
      valid: isLengthValid && hasUpperCase && hasNumber,
    },
  };

  dispatch({
    type: types.UPDATE_PASSWORD,
    data: pwd,
  });
};
