export default theme => ({
  root: {
    flex: 1,
    minWidth: 0,
    overflowX: 'hidden',
    overflowY: 'auto',
    position: 'relative',
  },
  '@global': {
    '.ais-Hits': {
      display: 'block',
      position: 'relative',
      width: '100%',
    },
    '.ais-Hits-list': {
      [`@media screen and (max-width: ${theme.breakpoints.values.sm - 1}px)`]: {
        gridTemplateColumns: '1fr',
        margin: 0,
        padding: theme.spacing.unit * 2,
        gridGap: `${theme.spacing.unit * 2}px`,
      },
      [`@media screen and (min-width: ${theme.breakpoints.values.sm}px)`]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      [`@media screen and (min-width: ${theme.breakpoints.values.md}px)`]: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      [`@media screen and (min-width: ${theme.breakpoints.values.lg}px)`]: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
      display: 'grid',
      gridGap: `${theme.spacing.unit * 3}px`,
      listStyle: 'none',
      margin: '0 auto',
      maxWidth: theme.breakpoints.values.lg,
      overflow: 'hiden',
      padding: `0 ${theme.spacing.unit * 3}px`,
      position: 'relative',
      width: '100%',
    },
    '.ais-Hits-item': {
      display: 'block',
      margin: 0,
      padding: 0,
      position: 'relative',
      overflow: 'hidden',
    },
  },
});
