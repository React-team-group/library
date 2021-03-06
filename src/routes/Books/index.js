import { connect } from 'react-redux';
import { requestBooks, clearBooks, replaceBooks } from '../../redux/books/actions';
import { Books as BooksComponent } from './Books';

const mapStateToProps = (state) => ({
  books: state.books.products,
  total: state.books.total,
  isLogged: state.auth.isLogged,
  searchStr: state.books.searchStr,
});

const mapDispatchToProps = {
  requestBooks,
  clearBooks,
  replaceBooks,
};

const BooksLayout = connect(mapStateToProps, mapDispatchToProps)(BooksComponent);

export { BooksLayout };
