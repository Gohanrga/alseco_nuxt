<template>
    <v-main>
        <v-card
          color="grey lighten-4"
          flat
          height="75px"
          v-if="isMobile"
        >
          <div class="select-responsive" >
            <SelectFiltro label="Selecciona tu comuna"
                          icon="mdi-map-marker-check-outline"
                          :items="comunas"
                          :onClick="obtieneTiendas"
            />
          </div>
        </v-card>
        <Nuxt />
    </v-main>
</template>
<script>
import SelectFiltro from './selectFiltro.vue'
import {mapState} from 'vuex';
import ObtieneTiendas from '../mixins/ObtieneTiendas.vue'
export default {
    mixins: [ObtieneTiendas],
    components:{
        SelectFiltro
    },
    props:{
        isMobile:{
            type: Boolean,
            default: false
        }
    },
    computed:{
        ...mapState(['comunas']),
    },
}
</script>