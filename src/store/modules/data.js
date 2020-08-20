import storage from '../../common/storage'

import axios from '../../common/api'

const state = {
    data: [],
    status: '',
}

const getters = {
    responseData: state => (state.data ? state.data : null),
}

const actions = {
    async votes({ commit }) {
        await axios
            .get('/tickets')
            .then(response => {
                commit('responseData', response.data)
            })
            .catch(error => {
                commit('responseData', error.response.data)
            })
    },
}

const mutations = {
    responseData(state, data) {
        state.data = data
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
