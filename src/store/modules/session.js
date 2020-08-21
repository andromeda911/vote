import storage from '../../common/storage'

import axios from '../../common/api'

import router from '../../router'

const state = {
    data: storage.get('session_data'),
    status: '',
}

const getters = {
    responseData: state => (state.data ? state.data : null),
    responseStatus: state => (state.status ? state.status : false),
}

const actions = {
    sessionLocale({ commit }, locale) {
        storage.set('session_data', { locale: locale })
    },
}

const mutations = {
    responseData(state, data) {
        storage.set('session_data', {
            user: {
                status: data.status,
                message: data.message,
                token: data.Authorization,
            },
        })

        state.data = storage.get('session_data')
    },

    responseStatus(state, status) {
        state.status = status
        setTimeout(() => {
            state.status = ''
        }, 3000)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
