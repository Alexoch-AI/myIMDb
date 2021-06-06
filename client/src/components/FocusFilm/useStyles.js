import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
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
  },
  typo1: {
    fontWeight: '900',
    padding: '130px 0 0px 130px',
    color: 'white',
  },
  typo2: {
    fontWeight: '400',
    paddingLeft: '130px',
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
  img1: {
    height: '500px',
    width: '350px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  grid1: {
    backgroundColor: 'white',
    color: 'black',
  },
  boxN3: {
    width: '800px',
    margin: '50px 0 20px 130px',
  },
  typo4: {
    ontSize: '36px',
    fontWeight: '900',
    lineHeight: '52px',
  },
  boxN4: {
    width: '800px',
    paddingBottom: '50px',
    paddingLeft: '130px',
  },
  typo5: {
    fontWeight: '800',
    paddingLeft: '130px',
  },
}))

export default useStyles
