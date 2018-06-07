const actionTypes = {
  HIDE_DRAWER: 'HIDE_DRAWER',
  SHOW_DRAWER: 'SHOW_DRAWER',
};

const hideDrawer = () => ({
  type: actionTypes.HIDE_DRAWER,
});

const showDrawer = () => ({
  type: actionTypes.SHOW_DRAWER,
});

const toggleDrawer = () => (dispatch, getState) => {
  const { modals } = getState();
  if (modals.drawer) {
    return dispatch(hideDrawer());
  }
  return dispatch(showDrawer());
};

export {
  actionTypes,
  hideDrawer,
  showDrawer,
  toggleDrawer,
};
