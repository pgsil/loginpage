import types from '../types';

const initialState = {
  name: '',
  validName: false,
  email: '',
  validEmail: false,
  password: {
    value: '',
    valid: false,
    confirmationValue: '',
    passwordStrength: {
      value: 0,
      tests: {
        isLengthValid: false,
        hasUpperCase: false,
        hasNumber: false,
      },
    },
  },
  pwdConfirmed: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PASSWORD:
      return { ...state, password: action.data };
    case types.UPDATE_NAME:
      return { ...state, name: action.name, validName: action.validName };
    case types.UPDATE_EMAIL:
      return { ...state, email: action.email, validEmail: action.validEmail };
    case types.UPDATE_PASSWORD_CONFIRMATION:
      return {
        ...state,
        password: { ...state.password, confirmationValue: action.data },
        pwdConfirmed: action.confirmed,
      };
    default:
      return { ...state };
  }
};
