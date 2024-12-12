import { reactive } from "vue";
import api from "./api.js";

export const store = {
  state: reactive({
    books: [],
    modules: [],
    messages: [],
    cart: [],
  }),
  async rellenarLibros() {
    try {
      const response = await api.getBooks();
      store.state.books = response.data;
    } catch (error) {
      store.anadirMensaje(error);
    }
  },
  async rellenarModulos() {
    try {
      const response = await api.getModules();
      store.state.modules = response.data;
    } catch (error) {
      store.anadirMensaje(error);
    }
  },
  async anadirLibro(libro) {
    try {
      const response = await api.addBook(libro);
      store.state.books.push(response.data);
    } catch (error) {
      store.anadirMensaje(error);
    }
  },
  async eliminarLibro(idLibro) {
    try {
      await api.deleteBook(idLibro);
      let indice = this.state.books.findIndex((libro) => libro.id === idLibro);
      if (indice === -1) {
        throw "No existe ningún libro con ese ID.";
      }
      store.state.books.splice(indice, 1);
    } catch (error) {
      store.anadirMensaje(error);
    }
  },
  async anadirMensaje(mensaje) {
    try {
      store.state.messages.push(mensaje);
    } catch (error) {
      store.anadirMensaje(error);
    }
  },
  async borrarMensaje(indice) {
    try {
      store.state.messages.splice(indice, 1);
    } catch (error) {
      store.anadirMensaje(error);
    }
  },
  async editarLibro(libro) {
    try {
      const response = await api.modify(libro);
    } catch (error) {
      store.anadirMensaje(error);
    }
  },
  async anadirLibroACarrito(libro) {
    try {
      store.state.cart.push(libro);
    } catch (error) {
      store.anadirMensaje(error);
    }
  },
  async eliminarLibroCarrito(idLibro) {
    try {
      let indice = this.state.books.findIndex((libro) => libro.id === idLibro);
      if (indice === -1) {
        throw "No existe ningún libro con ese ID.";
      }
      store.state.cart.splice(indice, 1);
    } catch (error) {
      store.anadirMensaje(error);
    }
  },
  async verLibroConId(idLibro) {
    try {
      const response = await api.getBook(idLibro);
      return response.data
    } catch (error) {
      store.anadirMensaje(error);
    }
  }
};
