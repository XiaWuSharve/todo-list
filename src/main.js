import Vue from "vue"
import App from './App.vue'
import Vuetify from 'vuetify/lib/framework';
import vuetify from './plugins/vuetify'
import { createPinia, PiniaVuePlugin } from 'pinia'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()
Vue.use(VueCompositionAPI)

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
    components: { App },
    render: h => h(App),
    pinia,
    vuetify
}).$mount('#app');
