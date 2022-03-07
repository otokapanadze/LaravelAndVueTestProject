<template>
    <div class="Home">
        <h1>Products</h1>
        <ProductFilter></ProductFilter>
        <Loading v-show="loading"></Loading>
        <div v-if="!loading">
            <div v-for="product in products">
                <router-link :to="'/products/' + product.id">
                    <div>
                        {{ product.name }}
                    </div>
                    <div>Author: {{ product.author.name }}</div>
                    <div>Created: {{ product.created_at.split('T')[0] ?? null }}</div>
                </router-link>
            </div>
            <div v-if="products !== null && products.length === 0">
                No Results
            </div>
        </div>
    </div>
</template>

<script>


import {mapActions, mapState} from 'vuex'
import Loading from "../../Components/Loading";
import ProductFilter from "../../Components/Filters/ProductFilter";

export default {
    name: 'Products',
    components: {ProductFilter, Loading},
    data() {
        return {}
    },
    computed: {
        ...mapState({
            products: state => state.products.products,
            loading: state => state.products.loading,
        }),
    },
    methods: {
        ...mapActions('products', ['getProducts']),
    },
    mounted() {
        this.getProducts();
    }
};
</script>
