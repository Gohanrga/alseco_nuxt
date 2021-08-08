<template>
  <v-app v-scroll="verificaScroll" v-resize="onResize">
    <AppMenu :isMobile="isMobile" :menuBusqueda="menuBusqueda"/>
    <Main :isMobile="isMobile"/>
    <Footer/>
  </v-app>
</template>

<script>
import AppMenu from '../components/appMenu.vue'
import Main from '../components/main.vue'
import Footer from '../components/footer.vue'
export default {
  components:{
    AppMenu,
    Main,
    Footer
  },

  data () {
    return {
      isMobile: false,
      menuBusqueda: false
    }
  },
  methods: {
    verificaScroll(){
      if(window.scrollY < 76 || this.isMobile)
        this.menuBusqueda = false
      else
        this.menuBusqueda = true
      console.log(this.menuBusqueda)
    },
    onResize() {
      if (window.innerWidth < 500) this.isMobile = true;
      else this.isMobile = false;
    },
    
  },
}
</script>
