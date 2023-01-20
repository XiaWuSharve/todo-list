import Vue from "vue"
import App from './App.vue'
import Vuetify from 'vuetify/lib/framework';
import vuetify from './plugins/vuetify'
import { createPinia, PiniaVuePlugin } from 'pinia'
import VueCompositionAPI from '@vue/composition-api'
import message from "./utils/message.ts";

Vue.use(PiniaVuePlugin)
const pinia = createPinia()
Vue.use(VueCompositionAPI)

Vue.config.productionTip = false
Vue.use(Vuetify)

export const vm = new Vue({
    components: { App },
    render: h => h(App),
    pinia,
    vuetify,
    beforeCreate() {
        Vue.prototype.$bus = this
    },
}).$mount('#app');