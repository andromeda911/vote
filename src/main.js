import './assets/fonts/_fonts.scss'

import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import i18n from './common/i18n'
import './components'
import VueQrcode from '@chenfengyuan/vue-qrcode'
import Clipboard from 'v-clipboard'

Vue.use(Clipboard)

export const bus = new Vue()

Vue.component(VueQrcode.name, VueQrcode)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app')
