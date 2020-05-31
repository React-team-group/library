import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://openlibrary.org/api',
  headers: { 'Content-Type': 'application/json' },
});

export const HttpService = {
  getBooksIsBn: (num) => {
    return instance.get(`/books?bibkeys=${num}`).then((res) => {
      console.log(res);
    });
  },
};

HttpService.getBooks();
