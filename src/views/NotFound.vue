<template>
    <div class="not-found">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <router-link to="/">Go Back Home</router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "NotFound",
});
</script>

<style>
.not-found {
    text-align: center;
    padding: 50px;
}

.not-found h1 {
    font-size: 100px;
    line-height: 100px;
    margin-bottom: 20px;
}

.not-found p {
    font-size: 20px;
    margin-bottom: 20px;
}
</style>
