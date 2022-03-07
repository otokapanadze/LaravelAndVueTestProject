<template>
    <div class="Login">
       <button @click="login()">Login</button>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

    export default {
        name: 'Login',
        computed: {
            ...mapState({
                authenticated: state => state.auth.authenticated,
            })
        },
        methods: {
            ...mapActions('auth', ['login']),
        },
    };
</script>
