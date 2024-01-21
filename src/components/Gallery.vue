<template>
    <lightgallery
        class="gallery"
        :settings="gallerySettings"
        :onInit="onInit"
        :onBeforeSlide="onBeforeSlide"
    >
        <div
            v-for="(galleryRow, rowIndex) in items"
            :key="rowIndex"
            class="gallery-row"
        >
            <a
                v-for="(galleryItem, itemIndex) in galleryRow"
                :data-src="galleryItem.src"
                :key="itemIndex"
                class="gallery-item"
                :style="`--r: ${galleryItem.ratio}`"
                :data-lg-size="galleryItem.size"
                :data-sub-html="galleryItem.subHtml"
            >
                <img
                    className="img-responsive"
                    :src="galleryItem.thumb"
                    @load="updateRatio($event, galleryItem, galleryRow.length)"
                />
            </a>
        </div>
    </lightgallery>
</template>

<script lang="ts">
import Lightgallery from "lightgallery/vue";
import { InitDetail } from "lightgallery/lg-events";

import lgZoom from "lightgallery/plugins/zoom";
import lgHash from "lightgallery/plugins/hash";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgThumbnail from "lightgallery/plugins/thumbnail";

// import ExifReader from "exifreader";

import galeryItems from "@/assets/gallery-items.json";

let lightGallery = null;

interface GalleryItem {
    src: string;
    thumb: string;
    ratio?: number;
    size?: string;
    subHtml?: string;
}

export default {
    name: "App",
    components: {
        Lightgallery,
    },
    data: () => ({
        items: galeryItems as GalleryItem[][],
        gallerySettings: {
            speed: 350,
            plugins: [lgHash, lgZoom, lgFullscreen, lgAutoplay, lgThumbnail],
            selector: ".gallery-item",
            mode: "lg-lollipop",
            mousewheel: true,
            thumbMargin: 5,
        },
    }),
    methods: {
        onInit: (detail: InitDetail) => {
            lightGallery = detail.instance;
            console.log("LightGallery initialized", lightGallery);
        },
        onBeforeSlide: () => {
            console.log("calling before slide");
        },
        // loadImage(galleryItem) {
        //     fetch(galleryItem.src)
        //         .then((response) => response.blob())
        //         .then((blob) => {
        //             // Create a Blob URL for the image
        //             galleryItem.blobUrl = URL.createObjectURL(blob);

        //             // Read EXIF data
        //             ExifReader.load(blob, { expanded: true })
        //                 .then((tags) => {
        //                     console.log(tags);
        //                     // Process EXIF data here
        //                 })
        //                 .catch((error) => {
        //                     // Handle error for EXIF extraction
        //                 });
        //         })
        //         .catch((error) => {
        //             // Handle error for image fetching
        //         });
        // },
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

            // Read the EXIF data
            // WARNING - This loads the image again, so it's very not efficient
            // ExifReader.load(img.src, { async: true })
            //     .then(function (tags) {
            //         console.log(tags);
            //     })
            //     .catch(function (error) {
            //         // Handle error.
            //     });
        },
    },
    // created() {
    //     this.items.forEach((galleryRow) => {
    //         galleryRow.forEach((galleryItem) => {
    //             this.loadImage(galleryItem);
    //         });
    //     });
    // },
};
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
