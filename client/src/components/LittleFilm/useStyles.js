import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '25px 10px 10px 10px',
    background: '#111111',
    opacity: '0.8',
    borderRadius: '10px',
    color: '#fff',
    width: '350px',
    cursor: 'pointer',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
      margin: '10px',
      background: '#111111',
      opacity: '0.8',
      borderRadius: '10px',
      color: '#fff',
      width: '450px',
      cursor: 'pointer',
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: 'auto',
  },
  content: {
    flex: '1 0 auto',
    width: 'auto',
  },
  cover: {
    width: '100%',
    backgroundSize: 'containe',
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
  },
  hiddenText: {
    textOverflow: 'ellipsis',
    width: '250px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      textOverflow: 'ellipsis',
      width: '320px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  },
  ratingSpan: {
    backgroundColor: '#FAC539',
    color: 'black',
    borderRadius: '8px',
    marginTop: '5px',
    width: '85px',
    padding: '0 5px 0 5px',
  },
}))

export default useStyles
