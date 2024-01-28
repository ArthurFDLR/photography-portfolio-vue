<template>
    <div class="image-card">
        <img :src="imgSrc" :alt="title" />
        <div class="label">
            {{ title }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "PhotoCard",
    props: {
        imgSrc: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
    },
});
</script>

<style>
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
