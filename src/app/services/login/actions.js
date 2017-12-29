import types from '../types';

export const updateLogin = obj => (dispatch) => {
  dispatch({
    type: types.LOGIN_UPDATE,
    data: obj,
  });
};

export const updateName = str => (dispatch) => {
  const validName = str.length > 2;

  dispatch({
    type: types.UPDATE_NAME,
    name: str,
    validName,
  });
};

export const updateEmail = str => (dispatch) => {
  const validEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(str);

  dispatch({
    type: types.UPDATE_EMAIL,
    email: str,
    validEmail,
  });
};

export const updatePassword = str => (dispatch, getState) => {
  const state = getState();

  const isLengthValid = str.length >= 6;
  const hasUpperCase = str !== str.toLowerCase();
  const hasNumber = /\d/.test(str);

  let value = [isLengthValid, hasUpperCase, hasNumber].filter(el => el === true);
  value = value.length;

  if (state.login.password) {
    const confirmed = str === state.login.password.confirmationValue;

    dispatch({
      type: types.UPDATE_PASSWORD_CONFIRMATION,
      data: confirmed,
    });
  }

  const pwd = {
    value: str,
    confirmationValue: state.login.password.confirmationValue || '',
    passwordStrength: {
      value,
      tests: {
        isLengthValid,
        hasUpperCase,
        hasNumber,
      },
    },
    valid: isLengthValid && hasUpperCase && hasNumber,
  };

  dispatch({
    type: types.UPDATE_PASSWORD,
    data: pwd,
  });
};

export const updatePasswordConfirmation = (pwdConfirmation, pwd) => (dispatch) => {
  const confirmed = pwd === pwdConfirmation;

  dispatch({
    type: types.UPDATE_PASSWORD_CONFIRMATION,
    data: pwdConfirmation,
    confirmed,
  });
};
