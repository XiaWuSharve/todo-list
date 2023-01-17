<template>
    <div>
        <input type="checkbox" id="all" v-model="check">
        <label for="all">完成{{ done }}/全部{{ todos.length }}</label>
        <button @click="$emit('delete-done')">删除已完成</button>
    </div>
</template>

<script>
export default {
    name: 'MyFooter',
    props: ['todos'],
    computed: {
        done() {
            return this.todos.reduce((pre, now) => pre + now.done, 0);
        },
        check: {
            get() {
                return this.done === this.todos.length
            },
            set(checked) {
                this.todos.forEach(v => v.done = checked)
            }
        }
    },

}
</script>

<style scoped>
div {
    margin: 5px;
    padding: 2px;
    overflow: hidden;
}

input {
    display: inline-block;
    margin: 2px;
}

button {
    float: right;
    background: red;
    border-radius: 5px;
    padding: 2px;
    color: white;
}
</style>