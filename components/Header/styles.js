export default theme => ({
  badge: {
    top: -4,
    right: 2,
    transition: 'opacity 0.3s ease',
  },
  badge__hidden: {
    opacity: 0,
  },
  badge__visible: {
    opacity: 1,
  },
  cartIcon: {
    marginLeft: theme.spacing.unit * 2,
  },
  label: {
    [`@media screen and (max-width: ${theme.breakpoints.values.sm - 1}px)`]: {
      display: 'none',
    },
    [`@media screen and (min-width: ${theme.breakpoints.values.sm}px)`]: {
      display: 'inline',
    },
  },
  left: {
    [`@media screen and (max-width: ${theme.breakpoints.values.sm - 1}px)`]: {
      paddingLeft: 0,
    },
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    textAlign: 'left',
  },
  logo: {
    [`@media screen and (max-width: ${theme.breakpoints.values.sm - 1}px)`]: {
      height: theme.spacing.unit * 3,
    },
    height: theme.spacing.unit * 4,
  },
  menuIcon: {
    marginRight: theme.spacing.unit * 2,
  },
  right: {
    [`@media screen and (max-width: ${theme.breakpoints.values.sm - 1}px)`]: {
      paddingRight: 0,
    },
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    textAlign: 'right',
  },
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    borderBottomColor: theme.palette.grey[300],
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    height: theme.spacing.unit * 9,
  },
});
