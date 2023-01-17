<template>
    <input @keydown.enter="add" v-model="text" type="text">
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name: 'MyHeader',
    data() {
        return {
            text: '',
        }
    },
    methods: {
        add() {
            if (!this.text.trim()) return;
            const todoObj = { id: nanoid(), title: this.text, done: false }
            this.$emit('add-todo', todoObj);
            this.text = '';
        }
    }
}
</script>

<style scoped>
input {
    width: calc(100% - 10px);
    height: 2rem;
    margin: 5px;
    border: 2px #3f3f3f3f solid;
    border-radius: 5px;
}
</style>