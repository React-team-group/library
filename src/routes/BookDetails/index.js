import { connect } from 'react-redux';
import { BookDetails as SingleBook } from './BookDetails';
import { bookByID } from '../../redux/books/actions';

const mapStateToProps = (state) => ({
  book: state.books.book,
});

const mapDispatchToProps = {
  bookByID,
};

export const BookDetails = connect(mapStateToProps, mapDispatchToProps)(SingleBook);
