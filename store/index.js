export const state = () => ({
    tiendas: [],
    tiendasFiltro: [],
    comunas:[]
})

export const mutations = {
    setTiendas(state, value) {
        state.tiendas = value
    },
    setTiendasFiltro(state, value) {
        state.tiendasFiltro = value
    },
    setComunas(state, value) {
        state.comunas = value
    }
}

export const actions = {
    saveTiendas({ commit }, tiendas) {
        commit('setTiendas', tiendas)
        commit('setTiendasFiltro', tiendas)
    },
    saveTiendasFiltro({ commit }, tiendasFiltro) {
        commit('setTiendasFiltro', tiendasFiltro)
    },
    saveComunas({ commit }, comunas) {
        commit('setComunas', comunas)
    }
}

export const getters = {
    filtraTiendas: (state) => (textoBusqueda) => {
        return state.tiendas.filter(data => data.nombre.toUpperCase().indexOf(textoBusqueda.toUpperCase()) >= 0)
    },
}