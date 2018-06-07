import bucket from '../../config';

const actionTypes = {
  ADD_ITEM: 'ADD_ITEM',
};

const addItem = item => ({
  type: actionTypes.ADD_ITEM,
  item,
});

const shouldFetchItem = (slug, state) => {
  const { items } = state;
  if (!items || !items[slug]) return true;
  return !items[slug].isLoading;
};

const fetchAndAddItem = slug => (dispatch, getState) => {
  if (shouldFetchItem(slug, getState())) {
    return bucket.getObject({ slug })
      .then(res => dispatch(addItem(res.object)))
      .catch(err => console.error(err)); // eslint-disable-line no-console
  }
  return Promise.resolve();
};

export {
  actionTypes,
  addItem,
  shouldFetchItem,
  fetchAndAddItem,
};
