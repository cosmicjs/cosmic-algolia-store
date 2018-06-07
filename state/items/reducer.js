import { actionTypes } from './actions';

const { ADD_ITEM } = actionTypes;

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        [action.item.slug]: action.item,
      };
    default:
      return state;
  }
};
