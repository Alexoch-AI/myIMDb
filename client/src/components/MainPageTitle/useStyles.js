import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: '900',
    fontSize: '50px',
    [theme.breakpoints.up('md')]: {
      fontWeight: '900',
      fontSize: '80px',
    },
  },
  smallroot: {
    fontSize: '20px',
    [theme.breakpoints.up('md')]: {
      fontSize: '50px',
    },
  },
  rootBox: {
    paddingTop: '10vh',
    paddingBottom: '20px',
    [theme.breakpoints.up('md')]: {
      paddingTop: '20vh',
      paddingBottom: '20px',
    },
  },
}))

export default useStyles
