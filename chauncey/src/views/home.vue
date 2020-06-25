<template>
    <div class="home">
        <bannerIntr></bannerIntr>
        <boutiqueBlog></boutiqueBlog>
        <wonderfulLife></wonderfulLife>
        <favoriteMusic></favoriteMusic>
        <magicPhoto></magicPhoto>
    </div>
</template>

<script>
import bannerIntr from "../components/home/bannerIntr.vue";
import boutiqueBlog from "../components/home/boutiqueBlog.vue";
import wonderfulLife from "../components/home/wonderfulLife.vue";
import favoriteMusic from "../components/home/favoriteMusic.vue";
import magicPhoto from "../components/home/magicPhoto.vue";

export default {
    components: {
        bannerIntr,
        boutiqueBlog,
        wonderfulLife,
        favoriteMusic,
        magicPhoto
    },
    data() {
        return {
            show: true
        };
    },
    watch: {
        $route(to, from) {
            if (to.path === "/blog/edit") {
                this.show = false;
            } else {
                this.show = true;
            }
        }
    }
};
</script>
<style scoped>
.home {
    width: 100%;
}
</style>
