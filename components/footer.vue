<template>
    <v-footer
      class="secondary footer"
    >
      <div class="detalle-footer">
          <div >Locación</div>
          <div class="detalle-text-footer">
              <div>
                <v-icon color="white">mdi-map-marker-check-outline</v-icon>
              </div>
              <span>Estás en Maipu</span>
          </div>
      </div>
      <div class="detalle-footer">
          <div >Social Media</div>
          <div class="detalle-text-footer">
              <div>
                <v-icon color="white">mdi-instagram</v-icon>
                <v-icon color="white">mdi-facebook</v-icon>
                <v-icon color="white">mdi-whatsapp</v-icon>
              </div>
          </div>
      </div>
      <v-spacer class="spacer"></v-spacer>
      <div class="detalle-footer">
          <div class="detalle-img-footer">
            <v-img
              :src="require('@/static/logo-alseco-background.png')"
            >
            </v-img>
          </div>
          <div >
            <span>Al seco {{year}} / Santiago de Chile</span>
          </div>
      </div>
    </v-footer>
</template>
<script>
export default {
    computed:{
        year(){
            return new Date().getFullYear()
        }
    }
}
</script>