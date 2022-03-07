<template>
    <div class="app">
        <Navigation></Navigation>
        <router-view></router-view>
    </div>
</template>

<script>
import Navigation from './Components/Navigation.vue';
import {mapActions} from "vuex";

export default {
    name: 'app',
    components: {
        Navigation
    },
    methods: {
        ...mapActions('auth', [
            'getUser'
        ])
    },
    mounted() {
        this.getUser();
    }
};
</script>
