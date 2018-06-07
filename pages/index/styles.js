export default theme => ({
  page: {
    display: 'flex',
  },
  root: {
    height: '100vh',
  },
  '@global': {
    body: {
      backgroundColor: theme.palette.background.paper,
    },
  },
});
