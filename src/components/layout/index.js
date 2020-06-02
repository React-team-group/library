import { connect } from 'react-redux';

import { Layout as LayoutComponents } from './Layout';
import { auth } from '../../redux/login/actions';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});
const mapDispatchToProps = {
  auth,
};
export const Layout = connect(mapStateToProps, mapDispatchToProps)(LayoutComponents);
