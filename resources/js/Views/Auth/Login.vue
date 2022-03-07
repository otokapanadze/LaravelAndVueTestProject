<template>
    <div class="Login pt-10">
        <div class="flex flex-col w-full max-w-sm mx-auto p-4 border border-gray-200 bg-white shadow">
            <div class="flex flex-col mb-4">
                <label for="pass"
                       class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                    Email
                </label>

                <div class="relative">
                    <input id="email"
                           name="name"
                           type="email"
                           v-model="email"
                           placeholder="Email"
                           class="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12">

                </div>
            </div>
            <div class="flex flex-col mb-4">
                <label for="pass"
                       class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                    Password
                </label>

                <div class="relative">
                    <input id="pass"
                           name="name"
                           v-model="password"
                           placeholder="Password"
                           type="password"
                           class="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12">

                </div>
            </div>
            <button @click="handleLogin()" class="p-2 pl-5 pr-5 bg-green-500 text-gray-100 text-lg rounded-lg focus:border-4 border-green-300">Login</button>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

    export default {
        name: 'Login',
        data() {
            return {
                email: 'test@test.com',
                password: 'password',
            }
        },
        computed: {
            ...mapState({
                authenticated: state => state.auth.authenticated,
                errors: state => state.auth.errors,
                loading: state => state.auth.loading,
            })
        },
        methods: {
            handleLogin() {
                this.login({email: this.email, password: this.password});
            },
            ...mapActions('auth', ['login']),
        },
        watch: {
            authenticated(val) {
                if (val) {
                    this.$router.push('/');
                }
            }
        }
    };
</script>
