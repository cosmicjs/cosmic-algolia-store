import { actionTypes } from './actions';

const {
  CATCH_BRAND_FETCH_ERROR,
  RECEIVE_BRAND,
  REQUEST_BRAND,
} = actionTypes;

const defaultBrandState = {
  error: undefined,
  finishedLoadAt: undefined,
  isLoading: true,
  startedLoadAt: undefined,
  val: undefined,
};

const brandReducer = (state = defaultBrandState, action) => {
  switch (action.type) {
    case CATCH_BRAND_FETCH_ERROR:
      return {
        ...state,
        error: action.error.message,
        finishedLoadAt: Date.now(),
        isLoading: false,
      };
    case RECEIVE_BRAND:
      return {
        ...state,
        error: undefined,
        finishedLoadAt: Date.now(),
        isLoading: false,
        val: action.val,
      };
    case REQUEST_BRAND:
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
    case CATCH_BRAND_FETCH_ERROR:
    case RECEIVE_BRAND:
    case REQUEST_BRAND:
      return {
        ...state,
        [action.id]: brandReducer(state[action.id], action),
      };
    default:
      return state;
  }
};

export default rootReducer;
