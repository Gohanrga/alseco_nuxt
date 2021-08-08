<template>
    <v-select 
        :items="items"
        :label="label"
        :prepend-icon="icon"
        item-text="descripcion"
        item-value="id"
        v-model="itemSeleccionado"
        @change="onClick(itemSeleccionado)"
    ></v-select>
</template>
<script>
export default {
    data() {
        return {
            itemSeleccionado:0
        }
    },
    props:{
        label: {
            type: String,
            default: ''
        },
        icon:{
            type: String,
            default: ''
        },
        items:{
            type: Array,
            default: []
        },
        onClick: Function
    }
}
</script>