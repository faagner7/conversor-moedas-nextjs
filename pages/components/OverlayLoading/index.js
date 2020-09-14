import { makeStyles, CircularProgress } from '@material-ui/core';

const styles = () => ({
  root: ({ transparency }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: `rgba(255, 255, 255, ${transparency})`,
  }),
  progress: ({ size }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: (size / 2) * -1,
    marginLeft: (size / 2) * -1,
  }),
});

const useStyles = makeStyles(styles);

const OverlayLoading = ({ size = 60, transparency = 0.5 }) => {
  const classes = useStyles({ size, transparency });
  return (
    <div className={classes.root}>
      <CircularProgress className={classes.progress} size={size} />
    </div>
  );
};

export default OverlayLoading;
