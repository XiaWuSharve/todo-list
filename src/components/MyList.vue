<template>
    <ul>
        <MyItem v-for="item in todos" :key="item.id" :todo="item"></MyItem>
    </ul>
</template>

<script>
import MyItem from './MyItem.vue';
export default {
    name: 'MyList',
    props: ['todos'],
    components: { MyItem },
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>

</style>