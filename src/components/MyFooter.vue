<template>
    <div class="d-flex justify-space-between">
        <v-checkbox :label="completeInfo" v-model="check"></v-checkbox>
        <v-btn @click="clearDone">删除已完成</v-btn>
    </div>
</template>

<script>
import { useTodoStore } from '@/store';
import { storeToRefs } from 'pinia';
export default {
    name: 'MyFooter',
    setup() {
        const store = useTodoStore();
        const { doneCount, updateAll, clearDone, allDone, total } = storeToRefs(store);
        return { doneCount, updateAll, clearDone, allDone, total };
    },
    computed: {
        check: {
            get() {
                return this.allDone;
            },
            set(checked) {
                this.updateAll(checked)
            }
        },
        completeInfo() {
            return `完成${this.doneCount}/全部${this.total}`
        }
    },
    mounted() {
        this.$bus.$on('check-all', this.updateAll);
    }
}
</script>