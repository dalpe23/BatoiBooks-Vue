<script>
import batoiLogo from "/logoBatoi.png";
import AddBook from './components/AddBook.vue';
import AppMenu from './components/AppMenu.vue';
import AppMessages from './components/AppMessages.vue';
import BooksList from './components/BooksList.vue';
import AppCart from './components/AppCart.vue';
import AboutView from './views/AboutView.vue';
import { useDataStore } from './stores/datos.js';  
import { mapState, mapActions } from 'pinia';


export default {
  components: {
    AppMenu,
    BooksList,
    AppMessages,
    AddBook,
    AppCart,
    AboutView
  },
  computed: {
        ...mapState(useDataStore, ['books', 'modules']),
    },
  methods: {
        ...mapActions(useDataStore, ['rellenarLibros', 'rellenarModulos']),
  },
  mounted() {
    try {
      this.rellenarLibros()
      this.rellenarModulos()
    } catch (error) {
      console.log('error' + error)
    }
  },
  data() {
    return {
      batoiLogo: batoiLogo,
    }
  }
}
</script>


<template>
  
  <div>
    <img :src="batoiLogo" alt="Logo Batoi" />
    <h1>BatoiBooks</h1>
    <app-menu></app-menu>
    <app-messages></app-messages>
    <router-view></router-view>
    <footer>Daniel Alemany</footer>
  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>
