<script>
import BookItem from './BookItem.vue';
import { useDataStore } from '../stores/datos.js';
import { mapState, mapActions } from 'pinia';
export default {
    computed: {
        ...mapState(useDataStore, ['books', 'messages', 'cart']),
    },
    components: {
        BookItem,
        useDataStore
    },
    methods: {
        ...mapActions(useDataStore, ['eliminarLibro', 'anadirLibroACarrito', 'anadirMensaje', 'totalLibros', 'existeLibroEnCarrito']),
        eliminar(idLibro) {
            try {
                if (confirm("quieres borrar el libro " + idLibro + "?")) {
                    this.eliminarLibro(idLibro)
                    this.anadirMensaje('libro con id ' + idLibro + ' eliminado')
                }
            } catch (error) {
                this.anadirMensaje(error)
            }
        },
        editar(book) {
            try {
                this.anadirMensaje('editando libro...')
                this.$router.push({ name: "editBook", params: { id: book.id } });
            } catch (error) {
                this.anadirMensaje(error)
            }
        },
        anadirCarrito(book) {
            try {
                this.anadirLibroACarrito(book)
                this.anadirMensaje('libro añadido al carrito con éxito')
            } catch (error) {
                this.anadirMensaje(error)
            }
        },
    }
}
</script>

<template>
    <h1>Total de Libros: {{ this.totalLibros() }}</h1>
    <div id="list">
    <book-item v-for="book in books" :key="book.id" :book="book">
        <button v-if="!this.existeLibroEnCarrito(book.id)" class="addCart">
            <span @click="anadirCarrito(book)" class="material-icons">add_shopping_cart</span>
        </button>

        <button @click="editar(book)" class="edit">
            <span class="material-icons">edit</span>
        </button>

        <button @click="eliminar(book.id)" class="remove">
            <span class="material-icons">delete</span>
        </button>
    </book-item>
    </div>
</template>

<style>
#list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3%; 
}
</style>