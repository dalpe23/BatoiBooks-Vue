<script>
const SERVER = import.meta.env.VITE_URL_API
export default {
    props: {
        book: {
            type: Object,
            Required: true,
        }
    },
}
</script>

<template>
      <div>
        <h2>Libro: {{book.id}}</h2>
        <p>Cod. Módulo: {{book.moduleCode}}</p>
        <p>Editorial: {{book.publisher}}</p>
        <p>{{book.pages}} páginas</p>
        <p>Estado: {{book.status}}</p>
        <p>{{book.soldDate}}</p>
        <p>{{book.comments}}</p>
        <p><strong>{{book.price}}€</strong></p>     
      </div>
</template>