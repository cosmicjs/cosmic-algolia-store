export default theme => ({
  cartButton: {
    alignItems: 'center',
    display: 'inline-flex',
    fontSize: '1rem',
    margin: theme.spacing.unit * 4,
  },
  cartButtonContainer: {
    backgroundColor: 'rgba(250, 250, 250, 0.9)',
    bottom: 0,
    left: 0,
    right: 0,
    position: 'fixed',
    textAlign: 'center',
  },
  cartIcon: {
    fill: theme.palette.primary.contrastText,
    marginLeft: theme.spacing.unit,
  },
  content: {
    gridArea: 'content',
  },
  imageGallery: {
    gridArea: 'gallery',
    margin: '0 auto',
    maxWidth: 400,
    width: '100%',
  },
  main: {
    fontSize: '1rem',
  },
  price: {
    color: theme.palette.secondary.main,
    fontSize: '1.2rem',
  },
  root: {
    [`@media screen and (max-width: ${theme.breakpoints.values.md - 1}px)`]: {
      gridTemplateColumns: '1fr',
      gridTemplateAreas: `
        "title"
        "gallery"
        "content"
      `,
    },
    [`@media screen and (min-width: ${theme.breakpoints.values.md}px)`]: {
      gridTemplateColumns: '400px 1.5fr',
      gridTemplateAreas: `
        "title title"
        "gallery content"
      `,
    },
    display: 'grid',
    gridGap: `${theme.spacing.unit * 4}px`,
    margin: '0 auto',
    maxWidth: theme.breakpoints.values.md,
    paddingBottom: theme.spacing.unit * 14,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 6,
    width: '100%',
  },
  title: {
    gridArea: 'title',
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    textAlign: 'center',
  },
});
