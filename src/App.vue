<script>
import batoiLogo from "/logoBatoi.png";
import AddBook from './components/AddBook.vue';
import AppMenu from './components/AppMenu.vue';
import AppMessages from './components/AppMessages.vue';
import BooksList from './components/BooksList.vue';
import AppCart from './components/AppCart.vue';
import AboutView from './views/AboutView.vue';
import {store} from './store.js';


export default {
  components: {
    AppMenu,
    BooksList,
    AppMessages,
    AddBook,
    AppCart,
    AboutView
  },
  mounted() {
    try {
      store.rellenarLibros()
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
    <books-list></books-list>
    <add-book></add-book>
    <app-cart></app-cart>
    <about-view></about-view>
    <footer>Daniel Alemany</footer>
  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
