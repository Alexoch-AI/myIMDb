import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: ' 20px 20px 20px 20px',
    width: '100px',
    height: '36px',
    position: 'absolute',
    marginTop: '10vh',
    lineHeight: '1.60',
    backgroundColor: 'aqua',
    '&:hover': {
      backgroundColor: 'aqua',
    },
    [theme.breakpoints.up('md')]: {
      borderRadius: ' 0 20px 20px 0',
      marginTop: '0px',
      top: '0px',
      position: 'relative',
      lineHeight: '1.60',
      backgroundColor: 'aqua',
      '&:hover': {
        backgroundColor: 'aqua',
      },
    },
  },
  rootSearch: {
    paddingLeft: '5vw',
    backgroundColor: 'white',
    borderRadius: '20px 20px 20px 20px',
    fontSize: '28px',
    border: 'none',
    '&:hover': {
      outline: 'none',
      color: 'black',
      placeContent: 'none',
      paddingLeft: '5vw',
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '10px',
      backgroundColor: 'white',
      borderRadius: '20px 0 0 20px',
      fontSize: '28px',
      border: 'none',
      outline: 'none',
      '&:hover': {
        outline: 'none',
        color: 'black',
        placeContent: 'none',
        paddingLeft: '10px',
        border: 'none',

      },
    },
  },
  rootForm: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
    },
  },
  rootBox: {
    paddingTop: '40px',
    paddingBottom: '40px',
  },
}))

export default useStyles
