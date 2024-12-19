import { defineStore } from "pinia";
import api from "../api.js";

export const useDataStore = defineStore("datos", {
  state: () => { //data
    return {
      books: [],
      modules: [],
      messages: [],
      cart: JSON.parse(localStorage.getItem("cart")) || [],
    };
  },
  getters: { //computed
    getModuleByCode: (state) => (codigoParametro) =>
      state.modules.find((module) => module.code === codigoParametro) || {},
  },
  actions: { //methods
    async rellenarLibros() {
      try {
        const response = await api.getBooks();
        this.books = response.data;
      } catch (error) {
        this.anadirMensaje(error);
      }
    },
    async rellenarModulos() {
      try {
        const response = await api.getModules();
        this.modules = response.data;
      } catch (error) {
        this.anadirMensaje(error);
      }
    },
    async anadirLibro(libro) {
      try {
        const response = await api.addBook(libro);
        this.books.push(response.data);
      } catch (error) {
        this.anadirMensaje(error);
      }
    },
    async eliminarLibro(idLibro) {
      try {
        await api.deleteBook(idLibro);
        let indice = this.books.findIndex((libro) => libro.id === idLibro);
        if (indice === -1) {
          throw "No existe ningún libro con ese ID.";
        }
        this.books.splice(indice, 1);
      } catch (error) {
        this.anadirMensaje(error);
      }
    },
    async anadirMensaje(mensaje) {
      try {
        this.messages.push(mensaje);
      } catch (error) {
        this.anadirMensaje(error);
      }
    },
    async borrarMensaje(indice) {
      try {
        this.messages.splice(indice, 1);
      } catch (error) {
        this.anadirMensaje(error);
      }
    },
    async editarLibro(libro) {
      try {
        const response = await api.modify(libro);
      } catch (error) {
        this.anadirMensaje(error);
      }
    },
    async anadirLibroACarrito(libro) {
      try {
        this.cart.push(libro);
        localStorage.setItem("cart", JSON.stringify(this.cart));
      } catch (error) {
        this.anadirMensaje(error);
      }
    },
    async eliminarLibroCarrito(indice) {
      try {
        this.cart.splice(indice, 1);
        localStorage.setItem("cart", JSON.stringify(this.cart));
      } catch (error) {
        this.anadirMensaje(error);
      }
    },
    async borrarCarrito() {
      try {
        this.cart = [];
        localStorage.setItem("cart", JSON.stringify(this.cart));
      } catch (error) {
        this.anadirMensaje(error);
      }
    },
    async verLibroConId(idLibro) {
      try {
        const response = await api.getBook(idLibro);
        return response.data;
      } catch (error) {
        this.anadirMensaje(error);
      }
    },
    totalLibros() {
      return this.books.length;
    },
    totalLibrosCarrito() { 
      return this.cart.length; 
    },
    existeLibroEnCarrito(idLibro) {
      return this.cart.some((libro) => libro.id === idLibro);
    }
  }
});
