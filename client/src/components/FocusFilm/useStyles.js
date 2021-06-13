import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  superDiv: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
    },
  },
  boxN1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '100px',
  },
  boxN2: {
    backgroundColor: 'black',
    height: '100vh',
    width: '100%',
    textShadow: 'black 0 0 6px',
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'black',
      height: '100vh',
      width: '100%',
      textShadow: 'black 0 0 6px',
    },
  },
  typo1: {
    fontWeight: '700',
    margin: '20% 5% 5% 5%',
    color: 'white',
    textAlign: 'center',
    fontSize: '40px',
    [theme.breakpoints.up('md')]: {
      fontWeight: '900',
      color: 'white',
      fontSize: '55px',
      margin: '130px 0 0px 130px',
    },
  },
  typo2: {
    fontWeight: '400',
    paddingLeft: '5%',
    textAlign: 'center',
    fontSize: '20px',
    [theme.breakpoints.up('md')]: {
      fontWeight: '400',
      paddingLeft: '130px',
      fontSize: '40px',
    },
  },
  mainImgBox: {
    padding: '0 0 0 0',
    [theme.breakpoints.up('md')]: {
      position: 'relative',
      width: '1000px',
      marginTop: '150px',
    },
  },
  typo3: {
    backgroundColor: '#FAC539',
    color: 'black',
    borderRadius: '8px',
    marginTop: '5px',
    width: '85px',
  },
  button1: {
    height: '50px',
    width: '150px',
    border: '3px solid white',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '20%',
    marginTop: '20px',
  },
  boxButton1: {
    textAlign: 'center',
    padding: ' 0 0 20px 0',
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      padding: ' 0 0 20px 130px',
    },
  },
  img1: {
    height: '500px',
    width: '350px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('md')]: {
      height: '500px',
      width: '350px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  grid1: {
    backgroundColor: 'white',
    color: 'black',
  },
  boxN3: {
    width: '90%',
    margin: '5% 10% 5% 5%',
    [theme.breakpoints.up('md')]: {
      width: '800px',
      margin: '50px 0 20px 130px',
    },
  },
  typo4: {
    fontSize: '36px',
    fontWeight: '900',
    lineHeight: '52px',
  },
  boxN4: {
    width: '90%',
    padding: '5% 10% 5% 5%',
    [theme.breakpoints.up('md')]: {
      width: '800px',
      paddingBottom: '50px',
      paddingLeft: '130px',
      padding: '0 0 50px 130px',
    },
  },
  typo5: {
    fontWeight: '800',
    paddingLeft: '5%',
    [theme.breakpoints.up('md')]: {
      width: '800px',
      paddingBottom: '50px',
      paddingLeft: '130px',
    },
  },
  listBox: {
    paddingLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '130px',
      display: 'flex',

    },
  },
  videoBox: {
    paddingLeft: '5%',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '130px',
    },
  },
}))

export default useStyles
