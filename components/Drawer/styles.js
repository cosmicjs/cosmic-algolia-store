export default theme => ({
  btn: {
    display: 'block',
    marginBottom: theme.spacing.unit,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing.unit,
  },
  closeIcon: {
    fill: theme.palette.text.secondary,
  },
  divider: {
    display: 'block',
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 6,
    opacity: 0.1,
  },
  header: {
    textAlign: 'right',
  },
  logo: {
    display: 'block',
    margin: '0 auto',
    padding: 0,
  },
  rightBorder: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 1,
    height: '100%',
    backgroundImage: `linear-gradient(to bottom, ${theme.palette.grey[200]} 10%, transparent)`,
  },
  root: {
    paddintBottom: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 2,
    position: 'relative',
    [`@media screen and (max-width: ${theme.breakpoints.values.sm - 1}px)`]: {
      backgroundColor: theme.palette.background.default,
      bottom: 0,
      left: 0,
      position: 'fixed',
      right: 0,
      top: 0,
      transition: 'opacity 0.3s ease, z-index 0.3s ease',
      width: '100%',
      zIndex: 10,
    },
    [`@media screen and (min-width: ${theme.breakpoints.values.sm}px)`]: {
      flex: 'none',
      maxWidth: Math.floor(theme.breakpoints.values.sm * 0.5),
      transition: 'margin-left 0.3s ease',
      width: '100%',
    },
  },
  root__closed: {
    [`@media screen and (max-width: ${theme.breakpoints.values.sm - 1}px)`]: {
      opacity: 0,
      zIndex: -10,
    },
    [`@media screen and (min-width: ${theme.breakpoints.values.sm}px)`]: {
      marginLeft: -Math.floor(theme.breakpoints.values.sm * 0.5),
    },
  },
  root__open: {
    [`@media screen and (max-width: ${theme.breakpoints.values.sm - 1}px)`]: {
      opacity: 1,
      overflowY: 'auto',
      zIndex: 10,
    },
    [`@media screen and (min-width: ${theme.breakpoints.values.sm}px)`]: {
      marginLeft: 0,
    },
  },
  sectionTitle: {
    color: theme.palette.text.secondary,
    fontSize: '1rem',
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 4,
  },
  '@global': {
    '.ais-RefinementList': {
      marginBottom: theme.spacing.unit * 3,
      marginTop: theme.spacing.unit,
    },
    '.ais-RefinementList--noRefinement': {

    },
    '.ais-RefinementList-searchBox': {

    },
    '.ais-RefinementList-list': {
      display: 'block',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    '.ais-RefinementList-item': {
      backgroundColor: theme.palette.grey[200],
      borderRadius: 2,
      borderBottomColor: 'rgba(0,0,0,0.3)',
      borderBottomStyle: 'solid',
      borderBottomWidth: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      display: 'inline-block',
      marginBottom: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
      overflow: 'hidden',
      transition: 'background-color 0.3s ease, box-shadow 0.3s cubic-bezier(.25,.8,.25,1)',
    },
    '.ais-RefinementList-item:hover': {
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    },
    '.ais-RefinementList-item--selected': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
    '.ais-RefinementList-label': {
      alignItems: 'center',
      color: 'inherit',
      cursor: 'pointer',
      display: 'flex',
      fontSize: '0.8rem',
    },
    '.ais-RefinementList-checkbox': {
      display: 'none',
      opacity: 0,
    },
    '.ais-RefinementList-labelText': {
      color: 'inherit',
      fontFamily: '\'Roboto\', sans-serif',
      paddingBottom: theme.spacing.unit * 0.7,
      paddingLeft: theme.spacing.unit * 1.4,
      paddingRight: theme.spacing.unit * 1.4,
      paddingTop: theme.spacing.unit * 0.7,
    },
    '.ais-RefinementList-count': {
      display: 'none',
    },
    '.ais-RefinementList-noResults': {

    },
    '.ais-RefinementList-showMore': {

    },
    '.ais-RefinementList-showMore--disabled': {

    },
  },
});
