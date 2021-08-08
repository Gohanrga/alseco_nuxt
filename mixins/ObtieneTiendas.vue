<script>
import {ApiService} from '../ApiService'
import {mapActions} from 'vuex';
const apiService = new ApiService()
export default {
    methods: {
        ...mapActions(['saveTiendas']),
        obtieneTiendas(item){
            let uri = `tiendas?comuna=${Number(item)}`
            apiService
            .get(uri)
            .then(response => {
                this.saveTiendas(response.data)
            })
        }
    },
}
</script>