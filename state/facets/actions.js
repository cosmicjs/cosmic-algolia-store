import { fetchBrandIfNeeded } from '../brands/actions';
import { fetchCategoryIfNeeded } from '../categories/actions';

const actionTypes = {
  SET_FACETS: 'SET_FACETS',
};

const setFacets = facets => ({
  type: actionTypes.SET_FACETS,
  facets,
});

const fetchFacetTitlesAndSet = facets => (dispatch) => {
  const promises = [];
  if (facets.brand) {
    promises.push(Promise.all(Object.keys(facets.brand)
      .map(id => dispatch(fetchBrandIfNeeded(id)))));
  }
  if (facets.categories) {
    promises.push(Promise.all(Object.keys(facets.categories)
      .map(id => dispatch(fetchCategoryIfNeeded(id)))));
  }

  if (!promises.length) return Promise.resolve();

  return Promise.all(promises)
    .then(() => dispatch(setFacets(facets)))
    .catch(err => console.error(err)); // eslint-disable-line no-console
};

export {
  actionTypes,
  setFacets,
  fetchFacetTitlesAndSet,
};
