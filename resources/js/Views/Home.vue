<template>
    <div class="Home flex justify-center items-center pt-10">
        <div>
            <span>Welcome</span>
            <span class="ml-1" v-text="user?.name"></span>
        </div>
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
