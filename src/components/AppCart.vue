<script>
import { store } from '@/store';
import BookItem from './BookItem.vue';
export default {
    computed: {
        cart() {
            return store.state.cart
        }
    },
    components: {
        BookItem,
        store
    },
    methods: {
        eliminarCarrito(idLibro) {
            try {
                store.eliminarLibroCarrito(idLibro)
                store.anadirMensaje('libro eliminado del carrito con éxito')
            } catch (error) {
                store.anadirMensaje(error)
            }
        }
    }
}
</script>

<template>
    <h1>Carrito de Libros</h1>
    <div id="list"></div>
    <book-item v-for="book in cart"
        :key="book.id"
        :book="book">
        
        <button @click="eliminarCarrito(book.id)" class="cart-off">
            <span class="material-icons">delete</span>
        </button>
    </book-item>
</template>