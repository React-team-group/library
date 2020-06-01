import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: { 'Content-Type': 'application/json' },
});

export const HttpService = {
  getProducts: (page = 1, limit = 100) => {
    return instance.get(`/products?_page=${page}&_limit=${limit}`).then((res) => {
      console.log(res)
      return { total: Number(res.headers['x-total-count']), books: res.data };
    });
  },
  getProductId: (id) => {
    return instance.get(`/products/${id}`).then((res) => res);
  },

  getCategories: () => {
    return instance.get(`/categories`).then((res) => res);
  },

  postOrder: (data) => {
    return instance
      .post(`/orders`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res);
  },
};
