import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  export default {
    getBooks: () => api.get(`/books`),
    getModules: () => api.get(`/modules`),
    getBook: (id) => api.get(`/books/${id}`),
    addBook: (item) => api.post(`/books`, item),
    modify: (item) => api.put(`/books/${item.id}`, item),
    deleteBook: (id) => api.delete(`/books/${id}`),
}

