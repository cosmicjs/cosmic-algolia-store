import { actionTypes } from './actions';

const {
  CATCH_CATEGORY_FETCH_ERROR,
  RECEIVE_CATEGORY,
  REQUEST_CATEGORY,
} = actionTypes;

const defaultCategoryState = {
  error: undefined,
  finishedLoadAt: undefined,
  isLoading: true,
  startedLoadAt: undefined,
  val: undefined,
};

const categoryReducer = (state = defaultCategoryState, action) => {
  switch (action.type) {
    case CATCH_CATEGORY_FETCH_ERROR:
      return {
        ...state,
        error: action.error.message,
        finishedLoadAt: Date.now(),
        isLoading: false,
      };
    case RECEIVE_CATEGORY:
      return {
        ...state,
        error: undefined,
        finishedLoadAt: Date.now(),
        isLoading: false,
        val: action.val,
      };
    case REQUEST_CATEGORY:
      return {
        ...state,
        error: undefined,
        isLoading: true,
        startedLoadAt: Date.now(),
      };
    default:
      return state;
  }
};

const defaultRootState = {};

const rootReducer = (state = defaultRootState, action) => {
  switch (action.type) {
    case CATCH_CATEGORY_FETCH_ERROR:
    case RECEIVE_CATEGORY:
    case REQUEST_CATEGORY:
      return {
        ...state,
        [action.id]: categoryReducer(state[action.id], action),
      };
    default:
      return state;
  }
};

export default rootReducer;
