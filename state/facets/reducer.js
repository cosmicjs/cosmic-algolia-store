import { actionTypes } from './actions';

const { SET_FACETS } = actionTypes;

const defaultState = {};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FACETS:
      return action.facets || {};
    default:
      return state;
  }
};

export default reducer;
