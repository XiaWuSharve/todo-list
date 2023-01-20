<template>
    <v-app>
        <v-container>
            <v-card>
                <v-card-title>
                    <MyHeader></MyHeader>
                </v-card-title>
                <v-card-text v-show="!empty">
                    <MyList></MyList>
                </v-card-text>
                <v-card-text v-show="!empty">
                    <MyFooter></MyFooter>
                </v-card-text>
            </v-card>
        </v-container>
    </v-app>
</template>

<script>
import MyList from './components/MyList.vue'
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import { useTodoStore } from './store'
import { storeToRefs } from 'pinia'
import message from './utils/message.ts'

export default {
    name: 'App',
    components: { MyList, MyHeader, MyFooter },
    setup() {
        const refStore = storeToRefs(useTodoStore());
        const { empty, halfProgress } = refStore;
        return { empty, halfProgress }
    },
    mounted() {
        console.log(this)
        message.setListener()
    }
}
</script>