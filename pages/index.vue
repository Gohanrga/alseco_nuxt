<template>
  <v-container fluid>
    <v-row justify="center" align="center" class="primary">
      <v-col cols="12" sm="12" md="5" lg="5" class="pa-0 ma-0">
        <div class="titulo-banner">
          {{titulo}}
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="7" lg="7" class="pa-0 ma-0">
        <Banner/>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mt-5" v-if="tiendasFiltro.length===0">
      <v-col cols="12" sm="12" md="12" lg="12">
        <v-alert
          border="left"
          colored-border
          color="deep-purple accent-4"
          elevation="2"
        >
          Por favor selecciona una comuna
        </v-alert>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mt-5">
      <v-col cols="12" sm="6" md="4" lg="3" align="center" v-for="tienda in tiendasFiltro" :key="tienda.id" >
        <CardTienda :tienda="tienda"/>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import {ApiService} from '../ApiService'
import CardTienda from '../components/cardTienda.vue'
import Banner from '../components/banner.vue'
const apiService = new ApiService()
import {mapActions, mapState} from 'vuex';
export default {
  components:{
    CardTienda,
    Banner
  },
  data() {
    return {
      titulo: 'En Al Seco siempre encontrarás lo que buscas',
    }
  },
  computed:{
    ...mapState(['tiendasFiltro']),
  },
  mounted() {

  },
  methods: {
  },  
}
</script>