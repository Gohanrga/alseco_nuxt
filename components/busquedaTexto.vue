<template>
    <v-text-field
        :label="label"
        :placeholder="label"
        filled
        rounded
        dense
        append-icon="mdi-magnify"
        v-model="textoBusqueda"
        @keyup="busqueda(textoBusqueda)"
    ></v-text-field>
</template>
<script>
export default {
    data() {
        return {
            textoBusqueda: ''
        }
    },
    props:{
        label:{
            type: String,
            default: {}
        },
        busqueda: Function
    }
}
</script>