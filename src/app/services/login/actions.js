import types from '../types';

const updateLogin = obj => (dispatch) => {
  dispatch({
    type: types.LOGIN_UPDATE,
    data: obj,
  });
};

export default updateLogin;
