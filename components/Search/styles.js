export default theme => ({
  algoliaIcon: {
    marginTop: theme.spacing.unit * 3,
  },
  searchIcon: {
    height: theme.spacing.unit * 4,
  },
  root: {
    marginBottom: theme.spacing.unit * 6,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing.unit * 3,
    maxWidth: '100%',
    padding: theme.spacing.unit * 3,
    textAlign: 'center',
  },
  '@global': {
    '.ais-SearchBox': {
      margin: '0 auto',
      maxWidth: theme.spacing.unit * 40,
      width: '100%',
    },
    '.ais-SearchBox-form': {
      display: 'flex',
      position: 'relative',
    },
    '.ais-SearchBox-input': {
      backgroundColor: 'transparent',
      borderStyle: 'none',
      flex: 1,
      fontSize: '1.2rem',
      borderBottomStyle: 'solid',
      display: 'block',
      padding: theme.spacing.unit * 1,
      minWidth: 0,
    },
    '.ais-SearchBox-submit': {
      backgroundColor: 'inherit',
      borderStyle: 'none',
      cursor: 'pointer',
      display: 'block',
      flex: 'none',
      margin: 0,
      padding: 0,
    },
    '.ais-SearchBox-submitIcon': {
    },
    '.ais-SearchBox-reset': {
      display: 'none',
    },
  },
});
