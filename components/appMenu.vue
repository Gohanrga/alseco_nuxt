<template>
    <div>
        <v-app-bar
            app
            height="75px"
            v-if="!menuBusqueda"
        >
            <div class="img--logo">
            <v-img
                :src="require('@/static/logo-alseco.png')"
            >
            </v-img>
            </div>
            <v-spacer></v-spacer>
            <div class="pt-6 pr-4" v-if="!isMobile">
                <SelectFiltro label="Selecciona tu comuna"
                            icon="mdi-map-marker-check-outline"
                            :items="comunas"
                            :onClick="obtieneTiendas"
                />
            </div>
            <div class="pt-6 pr-4">
                <BusquedaTexto label="Busca tu producto" :busqueda="busquedaTiendas"/>
            </div>
        </v-app-bar>
        <v-app-bar
        app
        height="120px"
        class="primary"
        v-if="menuBusqueda && !isMobile"
        >
        <div class="menu-scroll">
            <div class="titulo-menu">
            {{titulo}}
            </div>
            <div class="img--menu">
            <v-img
                :src="require('@/static/carrera.png')"
            >
            </v-img>
            </div>
            <div class="pt-5 pr-5">
            <BusquedaTexto  label="Busca tu producto" :busqueda="busquedaTiendas"/>
            </div>
        </div>
        </v-app-bar>
    </div>
</template>
<script>
import {ApiService} from '../ApiService'
import BusquedaTexto from './busquedaTexto.vue'
import SelectFiltro from './selectFiltro.vue'
import ObtieneTiendas from '../mixins/ObtieneTiendas.vue'
import {mapActions, mapState} from 'vuex';
const apiService = new ApiService()
export default {
    components:{
        BusquedaTexto,
        SelectFiltro
    },
    data() {
        return {
            titulo: 'Encuentra productos o botilleras favoritas'
        }
    },
    mixins:[ObtieneTiendas],
    props:{
        isMobile:{
            type: Boolean,
            default: false
        },
        menuBusqueda:{
            type: Boolean,
            default: false
        }
    },
    computed:{
        ...mapState(['comunas', 'tiendasFiltro']),
    },
    mounted() {
        this.obtieneComunas()
    },
    methods: {
        ...mapActions(['saveTiendasFiltro', 'saveComunas', 'saveTiendas']),
        busquedaTiendas(textoBusqueda){
            if(this.tiendasFiltro.length !== 0){
                let filtro = this.$store.getters.filtraTiendas(textoBusqueda);
                this.saveTiendasFiltro(filtro)
            }
        },
        obtieneComunas(){
            apiService
            .get('comuna')
            .then(response => {
                let auxResponse = response.data
                for(let data in auxResponse)
                auxResponse[data]['descripcion'] = `${auxResponse[data].nombre} : ${auxResponse[data].distancia}`
                this.saveComunas(auxResponse)
            })
        },
    },
    
}
</script>