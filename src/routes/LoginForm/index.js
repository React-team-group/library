import { connect } from 'react-redux';
import { LoginForm } from './LoginForm';

import { auth } from '../../redux/login/actions';

const mapStateToProps = (state) => ({
  auth: state.isLogged,
});

const mapDispatchToProps = {
  auth,
};

const LoginLayout = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export { LoginLayout };
