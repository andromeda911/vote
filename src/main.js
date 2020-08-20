import './assets/fonts/_fonts.scss'

import './components'

import Vue from 'vue'
import app from './app.vue'
import clipboard from 'v-clipboard'
import i18n from './common/i18n'
import router from './router'
import store from './store'
import vueQrcode from '@chenfengyuan/vue-qrcode'

export const bus = new Vue()

Vue.use(clipboard)

Vue.component(vueQrcode.name, vueQrcode)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(app),
}).$mount('#app')
