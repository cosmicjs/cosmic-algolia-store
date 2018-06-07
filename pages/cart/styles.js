export default theme => ({
  emptyCart: {
    color: theme.palette.text.secondary,
    fontSize: '2rem',
    fontStyle: 'italic',
    marginTop: theme.spacing.unit * 4,
  },
  items: {
    [`@media screen and (max-width: ${theme.breakpoints.values.md - 1}px)`]: {
      gridTemplateColumns: 'auto auto auto auto auto auto 1fr',
      width: '100%',
    },
    [`@media screen and (min-width: ${theme.breakpoints.values.md}px)`]: {
      gridTemplateColumns: 'auto 1fr auto auto auto auto auto auto auto ',
      maxWidth: theme.breakpoints.values.md,
    },
    alignItems: 'center',
    display: 'grid',
    gridGap: `${theme.spacing.unit * 2}px`,
    margin: '0 auto',
  },
  root: {
    margin: '0 auto',
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    width: '100%',
  },
  submitBtn: {
    margin: theme.spacing.unit * 6,
  },
  total: {
    color: theme.palette.secondary.main,
    fontSize: '2rem',
    fontStyle: 'italic',
  },
  totalLabel: {
    fontSize: '1.4rem',
    fontStyle: 'italic',
    marginTop: theme.spacing.unit * 6,
  },
});
