import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px',
    background: '#111111',
    opacity: '0.8',
    borderRadius: '10px',
    color: '#fff'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: 'auto'
  },
  content: {
    flex: '1 0 auto',
    width: 'auto'
  },
  cover: {
    width: '100%',
    backgroundSize: 'contain',
    opacity: '1',
    marginTop: '5px',
    marginBottom: '5px',
    borderRadius: '8px',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  }
}));

export default useStyles
