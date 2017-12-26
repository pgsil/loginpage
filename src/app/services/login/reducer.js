import types from '../types';

const initialState = {
  search: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SPOTIFY_SEARCH:
      return { ...state, search: { ...action.data } };
    default:
      return { ...state };
  }
};
