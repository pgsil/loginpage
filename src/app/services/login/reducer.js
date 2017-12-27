import types from '../types';

const initialState = {
  name: '',
  email: '',
  password: {
    value: '',
    passwordStrength: {
      value: 0,
      tests: {
        isLengthValid: false,
        hasUpperCase: false,
        hasNumber: false,
      },
      valid: false,
    },
  },
  pwdConfirmed: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PASSWORD:
      return { ...state, login: { ...state.login, password: { ...action.data } } };
    default:
      return { ...state };
  }
};
