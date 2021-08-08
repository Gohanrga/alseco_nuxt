<template>
    <v-card
        class="card"
        max-width="300"
        elevation="3"
    >
        <v-img
        :src="tienda.background"
        height="75px"
        >
        <v-card-title class="title">
            <v-img
            :src="tienda.logo"
            class="logo-card"
            >
            </v-img>
            <span>{{tienda.nombre}}</span>
            <v-btn
            class="mx-2"
            fab
            dark
            small
            color="primary boton-flotante"
            >
            <v-icon dark>
            mdi-send-outline
            </v-icon>
        </v-btn>
        </v-card-title>
        
        </v-img>
        <v-card-text class="detalle">
        <v-row  >
            <v-col cols="6" class="ma-0 pa-0" align="start" v-for="(detalle, valor) in imagenesDetalle" :key="valor">
                <div class="detalle-descripcion">
                    <span >{{detalle.titulo}}</span>
                    <div class="detalle-img">
                        <v-img
                            :src="require(`@/static/${detalle.img}`)"
                        >
                        </v-img>
                        <span>{{tienda[detalle.campo]}}</span>
                    </div>
                </div>
            </v-col>
        </v-row>
        </v-card-text>
        <v-card-actions class="primary actions">
            <v-btn text class="white--text">
            Visitar Kali's
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    data() {
        return {
            imagenesDetalle:[
                {titulo: 'Retiro en tienda', img: 'retiro.png', campo: 'retiro'},
                {titulo: 'Costo de Envío (Maipú)', img: 'costo.png', campo: 'costoEnvio'},
                {titulo: 'Reparto a Domicilio', img: 'reparto.png', campo: 'reparto'},
                {titulo: 'Tiempo de Envío (Maipú)', img: 'tiempo.png', campo: 'tiempoEnvio'}
            ]
        }
    },
    props:{
        tienda:{
            type: Object,
            default: {}
        }
    }
}
</script>