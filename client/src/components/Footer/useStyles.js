import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  linkToButton: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none',
    },
    paddingLeft: '20px',
  },
  boxCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '10px',
  },
}))

export default useStyles
