export default theme => ({
  root: {
    paddingTop: theme.spacing.unit * 6,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 12,
    textAlign: 'center',
  },
  '@global': {
    '.ais-Pagination': {
      textAlign: 'center',
    },
    '.ais-Pagination--noRefinement': {

    },
    '.ais-Pagination-list': {
      display: 'inline-flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    '.ais-Pagination-list--noRefinement': {

    },
    '.ais-Pagination-item': {
      alignItems: 'center',
      borderRadius: 2,
      cursor: 'pointer',
      display: 'flex',
      height: theme.spacing.unit * 6,
      justifyContent: 'center',
      lineHeight: 1,
      minWidth: theme.spacing.unit * 6,
      '&:hover': {
        backgroundColor: theme.palette.grey[100],
      },
    },
    '.ais-Pagination-item--firstPage': {
      fontSize: '1.5rem',
    },
    '.ais-Pagination-item--lastPage': {
      fontSize: '1.5rem',
    },
    '.ais-Pagination-item--previousPage': {
      fontSize: '1.5rem',
    },
    '.ais-Pagination-item--nextPage': {
      fontSize: '1.5rem',
    },
    '.ais-Pagination-item--page': {
      fontSize: '1rem',
    },
    '.ais-Pagination-item--selected': {
      backgroundColor: theme.palette.grey[200],
    },
    '.ais-Pagination-item--disabled': {

    },
    '.ais-Pagination-link': {
      color: theme.palette.text.primary,
      textDecoration: 'none',
      fontFamily: '\'Roboto\', sans-serif',
    },
  },
});
