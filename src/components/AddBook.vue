<script>
import { store } from '@/store';

export default {
    props: {
        id: String
    },
    components: {
        store
    },
    data() {
        return {
            book: {}
        }
    },
    computed: {
        modules() {
            return store.state.modules
        },
        BooksList() {
            return store.state.books
        }
    },
    methods: {
        anadir() {
            if (!this.id) {     //si no hay id, añade
                try {
                    store.anadirLibro(this.book)
                    store.anadirMensaje('libro añadido con éxito')
                } catch (error) {
                    store.anadirMensaje(error)
                }
            } else {            //si hay id, edita
                try {
                    store.editarLibro(this.book)
                    store.anadirMensaje('libro editado con éxito')
                } catch (error) {
                    store.anadirMensaje(error)
                }
            }
        },
        redirect() {
            this.$router.push('/');
        },
        async cargarLibroConId() {
            if (this.id) {      //si hay id, muestra los botones de editar
                const libroMontadoAEditar = await store.verLibroConId(this.id)      //la id del prop
                this.book = libroMontadoAEditar
            }
        }
    },
    async mounted() {
        this.cargarLibroConId()
    },
    watch: {       //poner un watch q mire las id y segun si hay o no que borre o no el form(poniendo el book a {})
        id(newValue) {
            if (!newValue) {
                this.book = {}
            } else {
                this.cargarLibroConId()
            }
        }
    }
}
</script>

<template>
    <div id="form">
        <form id="bookForm" novalidate @submit.prevent="anadir" @submit="redirect">
            <h3 id="tituloForm" v-if="!this.id">Añadir libro</h3>
            <h3 id="tituloForm" v-if="this.id">Editar libro</h3>
            <div id="idLibroDiv" style="display:none;"> Id:
                <input type="text" id="id-libro" readonly>
            </div>

            <div>
                <label for="id-module">Módulo:</label>
                <select v-model="book.moduleCode" id="id-module" required>
                    <option value="">- Selecciona un módulo -</option>
                    <option v-for="module in modules" :value="module.code">{{ module.cliteral }}</option>
                </select>
                <span class="error"></span>
            </div>

            <div>
                <label for="publisher">Editorial:</label>
                <input v-model="book.publisher" type="text" id="publisher" required>
                <span class="error"></span>
            </div>

            <div>
                <label for="price">Precio:</label>
                <input v-model="book.price" type="number" id="price" required min="0" step="0.01">
                <span class="error"></span>
            </div>

            <div>
                <label for="pages">Páginas:</label>
                <input v-model="book.pages" type="number" id="pages" required min="0">
                <span class="error"></span>
            </div>

            <div>
                <label>Estado:</label>
                <label for="good">
                    <input type="radio" v-model="book.status" id="status" name="estado" value="good"
                        required>Good</label>
                <label for="new">
                    <input type="radio" v-model="book.status" id="status" name="estado" value="new" required>New</label>
                <label for="bad">
                    <input type="radio" v-model="book.status" id="status" name="estado" value="bad" required>Bad</label>
                <span class="error"></span>
            </div>

            <div>
                <label for="comments">Comentarios:</label>
                <textarea v-model="book.comments" id="comments"></textarea>
            </div>

            <button id="submitButton" type="submit" v-if="!this.id">Añadir</button>
            <button id="submitButton" type="submit" v-if="this.id">Editar</button>
            <button type="reset" v-if="!this.id">Reset</button>
            <button type="button" @click="cargarLibroConId()" v-if="this.id">Reset</button>

        </form>
    </div>
</template>