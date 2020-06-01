import { connect } from 'react-redux';
import { requestBooks } from '../../redux/books/actions';
import { Books as BooksComponent } from './Books';

const mapStateToProps = (state) => ({
  books: state.books.products,
  total: state.books.total,
});

const mapDispatchToProps = {
  requestBooks,
};

const BooksLayout = connect(mapStateToProps, mapDispatchToProps)(BooksComponent);

export { BooksLayout };
