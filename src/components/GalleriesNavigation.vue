<template>
    <nav class="navigation">
        <div
            v-for="gallery in galleries"
            :key="gallery.path"
            class="image-card"
        >
            <router-link :to="`/gallery/${gallery.path}`">
                <img :src="gallery.cover" :alt="gallery.title" />
                <div class="label">
                    {{ gallery.title }}
                </div>
            </router-link>
        </div>
    </nav>
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
.navigation {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 35px;
}

.image-card img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 10px 20px -4px rgba(0, 0, 0, 0.6);
    aspect-ratio: 4/5;
    object-fit: cover;
}

.label {
    width: 100%;
    padding: 25px 10px;
    font-size: 1.8rem;
    font-weight: 700;
    text-align: left;
    color: #000;
}

a {
    text-decoration: none;
}
</style>
