<template>
    <nav class="navigation">
        <router-link
            v-for="gallery in galleries"
            :key="gallery.path"
            class="image-card"
            :to="`/gallery/${gallery.path}`"
        >
            <PhotoCard :imgSrc="gallery.cover" :title="gallery.title" />
        </router-link>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { GalleriesWrapper, GallerySummary } from "@/utils/galleriesWrapper";

import PhotoCard from "@/components/PhotoCard.vue";

export default defineComponent({
    name: "GalleriesNavigation",
    components: {
        PhotoCard,
    },
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
.navigation {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 35px;
}
</style>
