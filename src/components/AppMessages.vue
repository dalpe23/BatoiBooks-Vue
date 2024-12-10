<script>
import { store } from '@/store';
export default {
    components: {
        store
    },
    computed: {
        messages() {
            return store.state.messages
        },
    },
    methods: {
        borrarMensaje(indice) {
            return store.borrarMensaje(indice)
        }
    }
}

</script>

<template>
    <div v-for="(message, index) in messages" class="alert alert-danger alert-dismissible" role="alert"> {{ message }} <button type="button"
            class="btn-close" data-bs-dismiss="alert" aria-label="Close"
            @click="borrarMensaje(index)" >x</button></div>
</template>