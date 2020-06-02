import { connect } from 'react-redux';

import { Layout as LayoutComponents } from './Layout';
import { auth } from '../../redux/login/actions';
import { search } from '../../redux/books/actions';
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});
const mapDispatchToProps = {
  auth,
  search,
};
export const Layout = connect(mapStateToProps, mapDispatchToProps)(LayoutComponents);
