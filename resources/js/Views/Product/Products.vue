<template>
    <div class="Home max-w-6xl mx-auto">
        <h1 class="font-bold text-2xl">Products</h1>
        <ProductFilter></ProductFilter>
        <Loading v-show="loading"></Loading>
        <div v-if="!loading">
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Name</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Author</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Created</div>
                            </th>
                        </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                        <tr v-for="product in products">
                            <td class="p-2 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="font-medium text-gray-800">{{ product.name }}</div>
                                </div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left">{{ product.author.name }}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left font-medium text-green-500">{{ product.created_at.split('T')[0] ?? null }}</div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
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
    },
};
</script>
