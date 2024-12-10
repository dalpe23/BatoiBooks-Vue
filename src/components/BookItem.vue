<script>
const SERVER = import.meta.env.VITE_URL_API
import { store } from '@/store';

export default {
    components: {
        store
    },
    props: {
        book: {
            type: Object,
            Required: true,
        }
    },
    methods: {
        eliminar(idLibro) {
            try {
                if (confirm("quieres borrar el libro " + idLibro + "?")) {
                    store.eliminarLibro(idLibro)
                    store.anadirMensaje('libro con id ' + idLibro +' eliminado')
                }
            } catch (error) {
                store.anadirMensaje(error)
            }
        }
    }

}
</script>

<template>
    <div>
        <h2>Libro: {{ book.id }}</h2>
        <p>Cod. Módulo: {{ book.moduleCode }}</p>
        <p>Editorial: {{ book.publisher }}</p>
        <p>{{ book.pages }} páginas</p>
        <p>Estado: {{ book.status }}</p>
        <p>{{ book.soldDate }}</p>
        <p>{{ book.comments }}</p>
        <p><strong>{{ book.price }}€</strong></p>
        <button class="addCart">
            <span class="material-icons">add_shopping_cart</span>
        </button>

        <button class="edit">
            <span class="material-icons">edit</span>
        </button>

        <button @click="eliminar(book.id)" class="remove">
            <span class="material-icons">delete</span>
        </button>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>