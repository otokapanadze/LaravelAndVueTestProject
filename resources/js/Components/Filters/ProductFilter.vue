<template>
    <div class="bg-violet-500 rounded-lg p-3">
        Author:
        <select @change="filter()" name="authors" v-model="author">
            <option value="">None</option>
            <option v-bind:value="author.id" v-for="author in authors">{{ author.name }}</option>
        </select>
        From:
        <input @change="filter()" v-model="from" type="date">
        To:
        <input @change="filter()" v-model="to" type="date">
        Name:
        <input @input="filter()" v-model="name" type="text" name="name">
        <button @click="clear()">Clear Filters</button>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

    export default {
        name: 'ProductFilter',
        computed: {
            ...mapState({
                authors: state => state.products.authors
            }),
        },
        data() {
            return {
                name: null,
                from: null,
                to: null,
                author: null,
            }
        },
        methods: {
            filter() {
                let filters = '';
                if (this.name) {
                    filters += 'name=' + this.name.toLowerCase();
                }

                if (this.from && this.to) {
                    filters += 'date=' + JSON.stringify({from: this.from, to: this.to});
                } else if (this.from) {
                    filters += 'date=' + JSON.stringify({from: this.from});
                }else if (this.to) {
                    filters += 'date=' + JSON.stringify({to: this.to});
                }
                if (this.author) {
                    filters += '&author=' + this.author;
                }

                this.getProducts(filters);
            },
            clear() {
                this.name = null;
                this.from = null;
                this.to = null;
                this.author = null;

                this.getProducts();
            },
            ...mapActions('products', ['getProducts','getAuthors']),
        },
        mounted() {
            this.getAuthors();
        }
    };
</script>
