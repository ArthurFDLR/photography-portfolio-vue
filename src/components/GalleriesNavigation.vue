<template>
    <div class="navigation">
        <nav>
            <router-link
                v-for="gallery in galleries"
                :key="gallery.path"
                :to="`/gallery/${gallery.path}`"
            >
                {{ gallery.title }}
            </router-link>
        </nav>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { GalleriesWrapper, GallerySummary } from "@/utils/galleriesWrapper";

export default defineComponent({
    name: "GalleriesNavigation",
    data() {
        return {
            galleries: [] as GallerySummary[],
        };
    },
    mounted() {
        this.galleries = GalleriesWrapper.getSummaries();
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
