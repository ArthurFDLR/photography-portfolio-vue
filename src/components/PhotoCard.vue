<template>
    <div class="image-card">
        <div class="image-container">
            <img :src="imgSrc" :alt="title" />
            <div class="label">{{ title }}</div>
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
.image-card .image-container {
    position: relative;
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 10px 20px -4px rgba(0, 0, 0, 0.6);
    aspect-ratio: 4/5;
    overflow: hidden; /* To respect border-radius */
}

.image-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.label {
    --vertical-position: 88%;
    position: absolute;
    top: var(--vertical-position);
    left: 0;
    width: 100%;
    padding: 10px;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    color: #fff;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 20%,
        rgba(0, 0, 0, 0.6) 45%,
        rgba(0, 0, 0, 0.6) 55%,
        rgba(0, 0, 0, 0) 80%,
        rgba(0, 0, 0, 0) 100%
    );
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);
}

a {
    text-decoration: none;
}
</style>
