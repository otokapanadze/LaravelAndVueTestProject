<template>
    <div class="Home">
        <Loading v-show="loading"></Loading>
        <div v-if="!loading && typeof product != null">
            <div>
                Name: <span>{{ product != null ? product.name : '' }}</span>
            </div>
        </div>
    </div>
</template>

<script>

import {mapActions, mapState} from "vuex";
import Loading from "../../Components/Loading";

export default {
        name: 'ShowProduct',
    components: {Loading},
    data() {
        return {}
    },
    computed: {
        ...mapState({
            product: state => state.products.product,
            loading: state => state.products.loading,
        }),
    },
    methods: {
        ...mapActions('products', ['getProduct']),
    },
    mounted() {
        this.getProduct(parseInt(this.$route.params.id));
    }
    };
</script>
