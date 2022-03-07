<template>
    <div class="Home">
        Welcome
        <div v-text="user.name"></div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: 'Home',
        computed: {
            ...mapState('auth', [
                'user',
                'authenticated',
            ])
        }
    };
</script>
