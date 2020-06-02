import { connect } from 'react-redux';
import { requestBooks, bookByID } from '../../redux/books/actions';
import { Books as BooksComponent } from './Books';

const mapStateToProps = (state) => ({
  books: state.books.products,
  total: state.books.total,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = {
  requestBooks,
  bookByID,
};

const BooksLayout = connect(mapStateToProps, mapDispatchToProps)(BooksComponent);

export { BooksLayout };
