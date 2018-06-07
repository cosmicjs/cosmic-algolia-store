export default {
  root: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    position: 'fixed',
    transition: 'opacity 0.3s ease',
  },
  root__hidden: {
    opacity: 0,
    zIndex: -1,
  },
  root__visible: {
    opacity: 1,
    zIndex: 1000,
  },
};
