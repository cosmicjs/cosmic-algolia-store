export default theme => ({
  a: {
    alignItems: 'center',
    borderColor: theme.palette.grey[200],
    borderRadius: 2,
    borderStyle: 'solid',
    borderWidth: 1,
    color: theme.palette.text.primary,
    display: 'inline-flex',
    justifyContent: 'center',
    margin: '0 auto',
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 2,
    textDecoration: 'none',
  },
  footer: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  img: {
    borderRadius: 2,
    display: 'block',
    height: 48,
    margin: 0,
    padding: 0,
    width: 48,
  },
  signature: {
    marginLeft: 16,
  },
  span: {
    display: 'block',
    marginBottom: theme.spacing.unit,
  },
});
