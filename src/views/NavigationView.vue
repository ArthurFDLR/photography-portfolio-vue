<template>
    <div class="home">
        <h1>Galleries</h1>
        <GalleriesNavigation />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import GalleriesNavigation from "@/components/GalleriesNavigation.vue";

export default defineComponent({
    name: "HomeView",
    components: {
        GalleriesNavigation,
    },
});
</script>

<style>
nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
