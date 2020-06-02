import { Layout as LayoutComponents } from './Layout';
import { connect } from 'react-redux';

import { auth } from '../../redux/login/actions';

const mapStateToProps = (state) => ({
  isLog: state.auth.isLogged,
});
const mapDispatchToProps = {
  auth,
};
export const Layout = connect(mapStateToProps, mapDispatchToProps)(LayoutComponents);
