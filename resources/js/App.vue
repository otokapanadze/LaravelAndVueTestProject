<template>
    <div class="app">
        <Navigation></Navigation>
        <router-view></router-view>
    </div>
</template>

<script>
import Navigation from './Components/Navigation.vue';
import {mapState} from "vuex";

export default {
    name: 'app',
    components: {
        Navigation,
    },
    computed: {
        ...mapState({
            authenticated: state => state.auth.authenticated,
        }),
    },
    watch: {
        authenticated(value) {
            if (!value) {
                this.$router.push('/login');
            }
        }
    },
};
</script>
