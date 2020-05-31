import {
  makeStyles
} from '@material-ui/core/styles';

export const useStyleLogin = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    width: '300px',
    border: '1px solid black',
    borderRadius: '10px',
  },

  label: {
    margin: '10px',
    fontSize: '20px',
  },

  input: {
    margin: '10px',
    padding: '5px',
    width: '100%',
    borderRadius: '4px',
    fontSize: '20px',
  },

  button: {
    marginTop: '10px',
    fontSize: '20px',
  },
}));