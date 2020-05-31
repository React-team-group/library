import {
  makeStyles
} from '@material-ui/core/styles';

export const useStyleLoginPage = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 700, // temporal value
  },
  title: {
    fontSize: '30px',
    margin: '20px',
  },
}));