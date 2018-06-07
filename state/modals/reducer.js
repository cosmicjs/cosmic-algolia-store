import { actionTypes } from './actions';

const { HIDE_DRAWER, SHOW_DRAWER } = actionTypes;

const defaultState = {
  drawer: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case HIDE_DRAWER:
      return {
        ...state,
        drawer: false,
      };
    case SHOW_DRAWER:
      return {
        ...state,
        drawer: true,
      };
    default:
      return state;
  }
};
