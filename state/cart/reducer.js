import { actionTypes } from './actions';

const {
  ADD_OR_UPDATE_ITEM,
  REMOVE_ITEM,
} = actionTypes;

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_OR_UPDATE_ITEM:
      return {
        ...state,
        [action.slug]: action.quantity,
      };
    case REMOVE_ITEM:
      return Object.keys(state)
        .filter(key => key !== action.slug)
        .reduce((accumulator, key) => ({
          ...accumulator,
          [key]: state[key],
        }), {});
    default:
      return state;
  }
};
