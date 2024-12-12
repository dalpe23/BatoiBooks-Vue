import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BooksList from '@/components/BooksList.vue'
import AddBook from '@/components/AddBook.vue'
import AppCart from '@/components/AppCart.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BooksList,
    },
    {
      path: '/addBook',
      name: 'addBook',
      component: AddBook,
    },
    {
      path: '/editBook/:id',
      name: 'editBook',
      component: AddBook,
      props: true,
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: AppCart,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },

  ],
})

export default router
