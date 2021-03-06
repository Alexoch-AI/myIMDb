import { makeStyles } from '@material-ui/core'
import { fade } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'absolute',
    width: '100%',
  },
  title: {
    flexGrow: 1,
    display: 'block',
    overflow: 'visible',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    display: 'flex',
    position: 'relative',
    right: '0',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: '25px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      // marginLeft: theme.spacing(1),
      display: 'block',
      width: 'auto',
      marginRight: '25px',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'white',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  myBar: {
    backgroundColor: 'black',
    padding: '0 0 0 0',
    [theme.breakpoints.up('sm')]: {
      padding: '0 155px 0 80px',
    },
  },
}))

export default useStyles
