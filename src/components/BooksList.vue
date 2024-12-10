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
    }
}
</script>

<template>
    <div id="list"></div>
    <book-item v-for="book in books"
        :key="book.id"
        :book="book"
        
    ></book-item>
</template>

<style>
</style>