<script>
import { useDataStore } from '../stores/datos.js';
import { mapState, mapActions } from 'pinia';
import BookItem from './BookItem.vue';
export default {
    computed: {
        ...mapState(useDataStore, ['cart', 'books', 'messages']),
    },
    components: {
        BookItem,
        useDataStore
    },
    methods: {
        ...mapActions(useDataStore, ['eliminarLibroCarrito', 'anadirMensaje', 'borrarCarrito', 'totalLibrosCarrito']),
        eliminarCarrito(idLibro) {
            try {
                this.eliminarLibroCarrito(idLibro)
                this.anadirMensaje('libro eliminado del carrito con éxito')
            } catch (error) {
                this.anadirMensaje(error)
            }
        },
        borrarCarritoCompleto(){
            try{
                this.borrarCarrito()
                this.anadirMensaje('libro eliminado del carrito con éxito')
            }catch(error){
                this.anadirMensaje(error)
            }
        },
        realizarCompra(){
            try {
                this.borrarCarrito()
                alert('Felicidades por tu compra!!!')
            } catch (error) {
                this.anadirMensaje(error)
            }
        }
    }
}
</script>

<template>
    <h1>Carrito de Libros</h1>
    <h1>Libros en el Carrito: {{ this.totalLibrosCarrito() }}</h1>
    <div id="list">
    <book-item v-for="(book, index) in cart"
        :key="book.id"
        :book="book">
        
        <button @click="eliminarCarrito(index)" class="cart-off">
            <span class="material-icons">delete</span>
        </button>
    </book-item>
 </div>
    <button>
        <span @click="borrarCarritoCompleto()" class="">Borrar libros del Carrito</span>
    </button>
    <button>
        <span @click="realizarCompra()" class="">Realizar Compra</span>
    </button>
</template>

<style>

</style>