import { reactive } from "vue";
import api from "./api.js";

export const store = {
  state: reactive({
    books: [],
    modules: [],
  }),
  async rellenarLibros(){
    const response = await api.getBooks();
    store.state.books = response.data
  },
  async rellenarModulos(){
    const response = await api.getModules();
    store.state.modules = response.data
  }
}

