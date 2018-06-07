import fetch from 'isomorphic-fetch';
import { BASE_URL } from '../../utils/constants';

const actionTypes = {
  CATCH_BRAND_FETCH_ERROR: 'CATCH_BRAND_FETCH_ERROR',
  RECEIVE_BRAND: 'RECEIVE_BRAND',
  REQUEST_BRAND: 'REQUEST_BRAND',
};

const catchBrandFetchError = (error, id) => ({
  type: actionTypes.CATCH_BRAND_FETCH_ERROR,
  error,
  id,
});

const receiveBrand = (val, id) => ({
  type: actionTypes.RECEIVE_BRAND,
  id,
  val,
});

const requestBrand = id => ({
  type: actionTypes.REQUEST_BRAND,
  id,
});

const fetchBrand = id => (dispatch) => {
  dispatch(requestBrand(id));

  return fetch(`${BASE_URL}/api/brand/${id}`)
    .then(res => res.text())
    .then(text => dispatch(receiveBrand(text, id)))
    .catch(err => dispatch(catchBrandFetchError(err, id)));
};

const shouldFetchBrand = (id, state) => {
  const { brands } = state;

  if (!brands[id]) return true;
  if (brands[id].isLoading) return false;
  return !brands[id].val;
};

const fetchBrandIfNeeded = id => (dispatch, getState) => {
  if (shouldFetchBrand(id, getState())) return dispatch(fetchBrand(id));
  return Promise.resolve();
};

export {
  actionTypes,
  catchBrandFetchError,
  fetchBrand,
  fetchBrandIfNeeded,
  receiveBrand,
  requestBrand,
  shouldFetchBrand,
};
