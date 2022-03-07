<template>
    <nav class="navigation">
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/products">Products</router-link>
            </li>
        </ul>
        <div v-if="authenticated">
            <div v-text="user.name"></div>
            <button @click="logout">
                Logout
            </button>
        </div>
        <div v-else-if="loading">
        <Loading/>
        </div>
        <div v-else>
            <router-link to="/login">
                Login
            </router-link>
        </div>
    </nav>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Loading from "./Loading";

    export default {
        name: 'Nav',
        components: {Loading},
        methods: {
            ...mapActions('auth', [
                'logout'
            ])
        },
        computed:{
            ...mapState('auth', [
                'user',
                'authenticated',
                'loading'
            ])
        }
    };
</script>
