<script>
import BookItem from './BookItem.vue';
import { store } from '@/store';
export default {
    computed: {
        books() {
            return store.state.books
        }
    },
    components: {
        BookItem,
        store
    },
    methods: {
        eliminar(idLibro) {
            try {
                if (confirm("quieres borrar el libro " + idLibro + "?")) {
                    store.eliminarLibro(idLibro)
                    store.anadirMensaje('libro con id ' + idLibro + ' eliminado')
                }
            } catch (error) {
                store.anadirMensaje(error)
            }
        },
        editar(book) {
            try {
                store.anadirMensaje('editando libro...')
                this.$router.push({ name: "editBook", params: { id: book.id } });
            } catch (error) {
                store.anadirMensaje(error)
            }
        },
        anadirCarrito(book) {
            try {
                store.anadirLibroACarrito(book)
                store.anadirMensaje('libro añadido al carrito con éxito')
            } catch (error) {
                store.anadirMensaje(error)
            }
        }

    }
}
</script>

<template>
    <div id="list"></div>
    <book-item v-for="book in books" :key="book.id" :book="book">
        <button class="addCart">
            <span @click="anadirCarrito(book)" class="material-icons">add_shopping_cart</span>
        </button>

        <button @click="editar(book)" class="edit">
            <span class="material-icons">edit</span>
        </button>

        <button @click="eliminar(book.id)" class="remove">
            <span class="material-icons">delete</span>
        </button>
    </book-item>
</template>

<style></style>