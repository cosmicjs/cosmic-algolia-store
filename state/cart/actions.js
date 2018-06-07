import { fetchAndAddItem } from '../items/actions';

const actionTypes = {
  ADD_OR_UPDATE_ITEM: 'ADD_OR_UPDATE_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
};

const addOrUpdateItem = ({ slug, quantity }) => ({
  type: actionTypes.ADD_OR_UPDATE_ITEM,
  quantity,
  slug,
});

const removeItem = slug => ({
  type: actionTypes.REMOVE_ITEM,
  slug,
});

const addOneItem = slug => async (dispatch, getState) => {
  const { cart } = getState();
  const quantity = cart[slug];

  if (!quantity) {
    await dispatch(fetchAndAddItem(slug));
    return dispatch(addOrUpdateItem({
      quantity: 1,
      slug,
    }));
  }

  return dispatch(addOrUpdateItem({
    quantity: quantity + 1,
    slug,
  }));
};

const removeOneItem = slug => (dispatch, getState) => {
  const { cart } = getState();
  try {
    const quantity = cart[slug];
    if (quantity === 1) {
      return dispatch(removeItem(slug));
    }
    return dispatch(addOrUpdateItem({
      quantity: quantity - 1,
      slug,
    }));
  } catch (e) {
    // Item isn't in cart; do nothing
    return Promise.resolve();
  }
};

export {
  actionTypes,
  addOrUpdateItem,
  removeItem,
  addOneItem,
  removeOneItem,
};
