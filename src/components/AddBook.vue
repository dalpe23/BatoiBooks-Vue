<script>
import { store } from '@/store';

export default {
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
            try {
                store.anadirLibro(this.book)
            } catch (error) {
                console.log('error' + error)
            }
        }
    },
    data() {
        return {
            book: {}
        }

    }
}
</script>

<template>
    <div id="form">
        <form id="bookForm" novalidate @submit.prevent="anadir">
            <h3 id="tituloForm">Añadir libro</h3>
            <div id="idLibroDiv" style="display:none;"> Id:
                <input type="text" id="id-libro" readonly>
            </div>

            <div>
                <label for="id-module">Módulo:</label>
                <select id="id-module" required>
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

            <button id="submitButton" type="submit">Añadir</button>
            <button type="reset">Reset</button>

        </form>
    </div>
</template>