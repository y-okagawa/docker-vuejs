<template>
    <div>
        <label>
            <input type="text" v-model="itemName">
        </label>
        <button v-on:click="addItem(itemName)">追加</button>
        <ul>
            <li v-for="item in items">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "vue-sample",
        data: function () {
            return {
                items: [
                    {name: "item-AAA"},
                    {name: "item-BBB"}
                ],
                itemName: ""
            }
        },
        methods: {
            addItem: function (name) {
                this.items.push({name: name})
            }
        }
    }
</script>

<style scoped>

</style>