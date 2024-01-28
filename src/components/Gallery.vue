<template>
    <div v-if="galleryGrid.length > 0">
        <lightgallery
            class="gallery"
            :settings="gallerySettings"
            :onInit="onInit"
            :onBeforeSlide="onBeforeSlide"
        >
            <div
                v-for="(galleryRow, rowIndex) in galleryGrid"
                :key="rowIndex"
                class="gallery-row"
            >
                <a
                    v-for="(galleryItem, itemIndex) in galleryRow"
                    :data-src="galleryItem.srcHigh"
                    :key="itemIndex"
                    class="gallery-item"
                    :style="`--r: ${galleryItem.ratio}`"
                    :data-lg-size="galleryItem.size"
                    :data-sub-html="galleryItem.subHtml"
                >
                    <img
                        className="img-responsive"
                        :src="galleryItem.srcMedium"
                        @load="
                            updateRatio($event, galleryItem, galleryRow.length)
                        "
                    />
                </a>
            </div>
        </lightgallery>
    </div>
    <div v-else>
        <p>Gallery not found</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { GalleriesWrapper, GalleryItem } from "@/utils/galleriesWrapper";

import Lightgallery from "lightgallery/vue";
import { InitDetail } from "lightgallery/lg-events";

import lgZoom from "lightgallery/plugins/zoom";
import lgHash from "lightgallery/plugins/hash";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgThumbnail from "lightgallery/plugins/thumbnail";

let lightGallery = null;

export default defineComponent({
    name: "PhotoGallery",
    components: {
        Lightgallery,
    },
    props: {
        galleryKey: {
            type: String,
            required: true,
        },
    },
    data: () => ({
        // items: galeryItems as GalleryItem[][],
        gallerySettings: {
            speed: 350,
            plugins: [lgHash, lgZoom, lgFullscreen, lgAutoplay, lgThumbnail],
            selector: ".gallery-item",
            mode: "lg-lollipop",
            mousewheel: true,
            thumbMargin: 5,
        },
        galleryGrid: [] as GalleryItem[][],
    }),
    methods: {
        onInit: (detail: InitDetail) => {
            lightGallery = detail.instance;
            console.log("LightGallery initialized", lightGallery);
        },
        onBeforeSlide: (detail: InitDetail) => {
            console.log("Slide changed", detail);
        },
        updateRatio(
            event: Event,
            galleryItem: GalleryItem,
            galleryRowLength: number
        ) {
            const img = event.target as HTMLImageElement;

            // Read the width and height of the image
            galleryItem.ratio = img.naturalWidth / img.naturalHeight;
            galleryItem.ratio =
                galleryRowLength === 1
                    ? 1
                    : img.naturalWidth / img.naturalHeight;
        },
    },
    mounted() {
        this.galleryGrid = GalleriesWrapper.getGalleryGrid(this.galleryKey);
    },
});
</script>

<style lang="css">
@import "lightgallery/css/lightgallery.css";
@import "lightgallery/css/lg-zoom.css";
@import "lightgallery/css/lg-fullscreen.css";
@import "lightgallery/css/lg-transitions.css";
@import "lightgallery/css/lg-autoplay.css";
@import "lightgallery/css/lg-thumbnail.css";

/* Override the default lightgallery styles from the import above */
@media screen and (min-width: 768px) {
    .lg-outer .lg-thumb-item {
        border: 2px solid #ffffff00;
    }
    .lg-outer .lg-thumb-item.active,
    .lg-outer .lg-thumb-item:hover {
        border-width: 2px;
        border-color: #fff;
    }
}

body {
    margin: 0;
}

.gallery {
    display: flex;
    flex-direction: column;
}

.gallery .gallery-row {
    display: flex;
    width: 95%;
    max-width: 1200px;
    height: auto;
    margin: 0 auto;

    flex-direction: row;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
}

.gallery .gallery-row .gallery-item {
    margin: 15px;
    flex-grow: var(--r);
    flex-basis: 0;
    cursor: zoom-in;
}

.gallery-item img {
    max-width: 100%;
    width: 100%;
    box-shadow: 0 10px 20px -4px rgba(0, 0, 0, 0.6);
}
</style>
