import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  img1: {
    height: '361px',
    width: '263px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '5%',
    '&:hover': {
      opacity: '0.5',
    },
  },
}))

export default useStyles
