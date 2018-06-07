export default theme => ({
  [`@media screen and (max-width: ${theme.breakpoints.values.md - 1}px)`]: {
    add: {
      gridColumn: 4,
    },
    figure: {
      display: 'block',
      gridColumn: 1,
      gridRowEnd: 'span 2',
      margin: 0,
      padding: 0,
    },
    img: {
      display: 'block',
      margin: 0,
      padding: 0,
    },
    quantity: {
      gridColumn: 3,
    },
    remove: {
      gridColumn: 6,
    },
    subtract: {
      gridColumn: 2,
    },
    title: {
      fontSize: '1.2rem',
      marginLeft: theme.spacing.unit * 2,
      minWidth: 0,
    },
    titleLink: {
      gridColumn: '2 / span 6',
    },
    totalPrice: {
      gridColumn: 5,
      minWidth: theme.spacing.unit * 10,
    },
    unitPrice: {
      display: 'none',
      // gridColumn: 5,
      // minWidth: theme.spacing.unit * 10,
    },
  },
  [`@media screen and (min-width: ${theme.breakpoints.values.md}px)`]: {
    add: {
      gridColumn: 5,
    },
    figure: {
      display: 'block',
      gridColumn: 1,
      margin: 0,
      padding: 0,
    },
    img: {
      display: 'block',
      margin: 0,
      padding: 0,
    },
    quantity: {
      gridColumn: 4,
    },
    remove: {
      gridColumn: 8,
    },
    subtract: {
      gridColumn: 3,
    },
    title: {
      fontSize: '1.2rem',
      minWidth: 0,
    },
    titleLink: {
      gridColumn: 2,
    },
    totalPrice: {
      gridColumn: 7,
      minWidth: theme.spacing.unit * 10,
    },
    unitPrice: {
      gridColumn: 6,
      minWidth: theme.spacing.unit * 10,
    },
  },
  img: {
    borderRadius: 2,
  },
  title: {
    textAlign: 'left',
  },
  titleLink: {
    textDecoration: 'none',
  },
});
