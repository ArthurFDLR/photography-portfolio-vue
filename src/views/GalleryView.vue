<template>
    <section>
        <h1>{{ galleryTitle }}</h1>
        <PhotoGallery v-if="galleryKey" :galleryKey="galleryKey" />
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PhotoGallery from "@/components/Gallery.vue";
import { GalleriesWrapper } from "@/utils/galleriesWrapper";

export default defineComponent({
    name: "PhotoGalleryView",
    components: {
        PhotoGallery,
    },
    data() {
        return {
            galleryKey: "" as string,
            galleryTitle: undefined as string | undefined,
        };
    },
    mounted() {
        this.galleryKey = this.$route.params.galleryKey as string;
        this.galleryTitle = GalleriesWrapper.getTitle(this.galleryKey);
    },
});
</script>

<style>
h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
}
</style>
