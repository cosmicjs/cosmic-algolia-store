import fetch from 'isomorphic-fetch';
import { BASE_URL } from '../../utils/constants';

const actionTypes = {
  CATCH_CATEGORY_FETCH_ERROR: 'CATCH_CATEGORY_FETCH_ERROR',
  RECEIVE_CATEGORY: 'RECEIVE_CATEGORY',
  REQUEST_CATEGORY: 'REQUEST_CATEGORY',
};

const catchCategoryFetchError = (error, id) => ({
  type: actionTypes.CATCH_CATEGORY_FETCH_ERROR,
  error,
  id,
});

const receiveCategory = (val, id) => ({
  type: actionTypes.RECEIVE_CATEGORY,
  id,
  val,
});

const requestCategory = id => ({
  type: actionTypes.REQUEST_CATEGORY,
  id,
});

const fetchCategory = id => (dispatch) => {
  dispatch(requestCategory(id));

  return fetch(`${BASE_URL}/api/category/${id}`)
    .then(res => res.text())
    .then(text => dispatch(receiveCategory(text, id)))
    .catch(err => dispatch(catchCategoryFetchError(err, id)));
};

const shouldFetchCategory = (id, state) => {
  const { categories } = state;

  if (!categories[id]) return true;
  if (categories[id].isLoading) return false;
  return !categories[id].val;
};

const fetchCategoryIfNeeded = id => (dispatch, getState) => {
  if (shouldFetchCategory(id, getState())) return dispatch(fetchCategory(id));
  return Promise.resolve();
};

export {
  actionTypes,
  catchCategoryFetchError,
  fetchCategory,
  fetchCategoryIfNeeded,
  receiveCategory,
  requestCategory,
  shouldFetchCategory,
};
