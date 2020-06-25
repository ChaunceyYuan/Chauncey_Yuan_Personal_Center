<template>
    <div class="bannerIntr">
        <div class="block">
            <el-carousel trigger="click" height="780px">
                <el-carousel-item v-for="item in bannerIntr" :key="item['title']">
                    <img :src="item['bgimg']" alt="">
                    <div class="content">
                        <h2 class="small">{{ item['title'] }}</h2>
                        <p>{{ item['text'] }}</p>
                        <router-link tag="button" :to="item['to']">Learn More</router-link>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bannerIntr: [
                {
                    title: "Chuancey Yuan",
                    text:
                        "Set yourself up so you don't run out of things to do",
                    to: "/",
                    bgimg: require("../../assets/home/bannerIntr/1.jpg")
                },
                {
                    title: "Web Blog",
                    text:
                        "Set yourself up so you don't run out of things to do",
                    to: "/blog/blogs?page=1&type=全部",
                    bgimg: require("../../assets/home/bannerIntr/2.jpg")
                },
                {
                    title: "Wonderful Life",
                    text:
                        "Set yourself up so you don't run out of things to do",
                    to: "/life",
                    bgimg: require("../../assets/home/bannerIntr/3.jpg")
                },
                {
                    title: "Favorite Music",
                    text:
                        "Set yourself up so you don't run out of things to do",
                    to: "/music",
                    bgimg: require("../../assets/home/bannerIntr/4.jpg")
                },
                {
                    title: "Magic Photo",
                    text:
                        "Set yourself up so you don't run out of things to do",
                    to: "/photo",
                    bgimg: require("../../assets/home/bannerIntr/5.jpg")
                }
            ]
        };
    }
};
</script>


<style>
.el-carousel__container button.el-carousel__arrow{
    width: 40px;
    height: 60px;
    border-radius: 0px;
    color: #3786ff;
    background-color: #fff;
    transition: all 0.3s ease;
}
.el-carousel__container button.el-carousel__arrow:hover{
    background-color: #3786ff;
    color: #fff;
}
.el-carousel__container button.el-carousel__arrow--left{
    left: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
.el-carousel__container button.el-carousel__arrow--right{
    right: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
.el-carousel__item {
    height: 100%;
    position: absolute;
}
.el-carousel__item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    transform: scale(1);
    transition: all 10s linear;
}
.el-carousel__item.is-animating img{
    transform: scale(1.15);
}
.el-carousel__item .content {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.5);
}
.el-carousel__item h2 {
    position: relative;
    /* top: 150px; */
    top: 0px;
    opacity: 0;
    color: #fff;
    font-weight: 600;
    font-size: 110px;
    text-align: center;
    transition: all 1s ease;
}
.el-carousel__item.is-animating h2 {
    opacity: 1;
    top: 180px;
}
.el-carousel__item p {
    position: relative;
    top: 580px;
    opacity: 0;
    color: #fff;
    font-size: 24px;
    text-align: center;
    transition: all 1.2s ease;
}
.el-carousel__item.is-animating p {
    top: 220px;
    opacity: 1;
}
.el-carousel__item button {
    outline: none;
    border: none;
    padding: 10px 20px;
    font-size: 20px;
    position: relative;
    left: 50%;
    top: 620px;
    opacity: 0;
    transform: translate(-50%, 0%);
    background-color: #3786ff;
    color: #fff;
    transition: all 1.2s ease;
    user-select: none;
    cursor: pointer;
}
.el-carousel__item.is-animating button {
    top: 270px;
    opacity: 1;
}
.el-carousel__item button::before {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    content: "";
    background-color: #ffffff;
    transform: scale(0, 1);
    transform-origin: top right;
    transition: transform 500ms ease;
    transition-timing-function: ease;
}
.el-carousel__item button:hover{
    color:#3786ff;
}
.el-carousel__item button:hover:before {
    transform: scale(1, 1);
    transform-origin: bottom left;
}
.el-carousel__indicator--horizontal button {
    width: 12px;
    height: 12px;
    /* border: 1px solid red; */
    border-radius: 50%;
}
</style>

