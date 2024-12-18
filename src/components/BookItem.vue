<script>
import { useDataStore } from '../stores/datos.js';
import { mapState, mapActions } from 'pinia';
export default {
    props: {
        book: {
            type: Object,
            Required: true,
        }
    },
    computed: {
        ...mapState(useDataStore, ['books', 'modules', 'getModuleByCode'])
    },
}
</script>

<template>
    <div class="card">
        <h2>Libro: {{ book.id }}</h2>
        <p>{{ getModuleByCode(book.moduleCode).cliteral || {} }}</p>
        <p>Editorial: {{ book.publisher }}</p>
        <p>{{ book.pages }} páginas</p>
        <p>Estado: {{ book.status }}</p>
        <p>{{ book.soldDate }}</p>
        <p>{{ book.comments }}</p>
        <p><strong>{{ book.price }}€</strong></p>
        <slot></slot>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
.card {
  background-color: #5f9ea0; 
  padding: 1.5px;
  border-radius: 9px;
  color: #fff;
  text-align: center;
  width: 200px;
  height: 250px;
}
</style>