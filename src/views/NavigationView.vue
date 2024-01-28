<template>
    <section class="home">
        <h1>Photography</h1>
        <GalleriesNavigation />
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import GalleriesNavigation from "@/components/GalleriesNavigation.vue";

export default defineComponent({
    name: "NavigationView",
    components: {
        GalleriesNavigation,
    },
});
</script>

<style>
.home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px;
}

.home h1 {
    font-size: 3.5rem;
    margin-left: 40px;
    font-weight: 700;
    margin-bottom: 70px;
    text-align: left;
}
</style>
