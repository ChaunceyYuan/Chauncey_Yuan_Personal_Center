<template>
    <div id="app">
        <div class="main_header" v-show="show">
            <div class="head_top">
                <div class="header_top_container">
                    <div class="welcome">Welcome to The Chauncey Yuan Personal Center</div>
                    <ul class="otherLink">
                        <li><a href="#"><span class="fab fa-qq"></span></a></li>
                        <li><a href="#"><span class="fab fa-weixin"></span></a></li>
                        <li><a href="#"><span class="fab fa-weibo"></span></a></li>
                        <li><a href="#"><span class="fab fa-github"></span></a></li>
                    </ul>
                </div>
            </div>
            <div class="head_bottom">
                <div class="header_bottom_container">
                    <ul class="head_bottom_left">
                        <li>
                            <router-link to="/home">HOME</router-link>
                        </li>
                        <li>
                            <router-link to="/blog/blogs?page=1&type=全部">BLOG</router-link>
                        </li>
                        <li>
                            <router-link to="/life">LIFE</router-link>
                        </li>
                    </ul>
                    <ul class="head_bottom_right">
                        <li>
                            <router-link to="/about">ABOUT</router-link>
                        </li>
                        <li>
                            <router-link to="/photo">PHOTO</router-link>
                        </li>
                        <li>
                            <router-link to="/music">MUSIC</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="main_header_fixed" v-show="show">
            <div class="head_bottom">
                <div class="header_bottom_container">
                    <ul class="head_bottom_left">
                    </ul>
                    <ul class="head_bottom_right">
                        <li>
                            <router-link to="/about">ABOUT</router-link>
                        </li>
                        <li>
                            <router-link to="/photo">PHOTO</router-link>
                        </li>
                        <li>
                            <router-link to="/music">MUSIC</router-link>
                        </li>
                        <li>
                            <router-link to="/life">LIFE</router-link>
                        </li>
                        <li>
                            <router-link to="/blog/blogs?page=1&type=全部">BLOG</router-link>
                        </li>
                        <li>
                            <router-link to="/home">HOME</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <router-view></router-view>
        <footerVue v-show="show"></footerVue>
    </div>
</template>

<script>
import footerVue from "./components/footerVue.vue";

export default {
    created() {
        this.listenerFunction();
    },
    mounted() {
        // $(".full_page_warp_before_load").css({
        //     width: 0
        // });
    },
    beforeDestroy() {
        document.removeEventListener("scroll", this.listenerFunction);
    },
    // destroyed(){},
    components: {
        footerVue
    },
    methods: {
        listenerFunction(e) {
            document.addEventListener("scroll", this.handleScroll, true);
        },
        handleScroll() {
            if (window.pageYOffset > 140) {
                document.getElementsByClassName("main_header_fixed")[0].style.height = "80px";
            } else {
                document.getElementsByClassName("main_header_fixed")[0].style.height = "0px";
            }
        }
    },
    data() {
        return {
            show: true
        };
    },
    watch: {
        $route(to, from) {
            if (to.path === "/edit") {
                this.show = false;
            } else {
                this.show = true;
            }
        }
    }
};
</script>

<style>
#app {
    /* width: 100%; */
    font-family: PingFangSC-Regular, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.main_header {
    width: 100%;
    z-index: 99;
}
.head_top {
    background-color: #0c0a0a;
}
.header_top_container,
.header_bottom_container {
    max-width: 1200px;
    height: 70px;
    padding: 0px 15px;
    margin: 0 auto;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header_top_container {
    background-image: url(assets/logo.png);
    background-repeat: no-repeat;
    background-size: 15%;
    background-position: bottom center;
}
.head_bottom {
    background-color: #000;
}
.header_bottom_container {
    height: 80px;
    /* background-image: url(assets/header-lower-bg.png);
    background-repeat: no-repeat; */
}
.welcome {
    font-size: 16px;
    color: #838383;
    font-weight: 400;
}

.otherLink li {
    position: relative;
    margin-left: 25px;
    display: inline-block;
}
.otherLink li a {
    color: #ffffff;
    font-size: 16px;
    /* -webkit-transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease; */
}
.header_bottom_container:before {
    position: absolute;
    content: "";
    left: 50%;
    top: 70px;
    z-index: 9;
    width: 542px;
    height: 158px;
    margin-top: -1px;
    transform: translateX(-50%);
    background: url(assets/header-lower-bg.png) no-repeat;
    background-position: center center;
    /* border: 1px solid red; */
}
.header_bottom_container li {
    position: relative;
    z-index: 2;
    padding: 25px 0px;
    /* -webkit-transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease; */
    transition: all 300ms ease;
}
.header_bottom_container .head_bottom_left li {
    float: left;
    margin-right: 65px;
}
.header_bottom_container .head_bottom_right li {
    float: right;
    margin-left: 65px;
}
.header_bottom_container li > a {
    position: relative;
    display: block;
    text-align: center;
    font-size: 16px;
    line-height: 30px;
    font-weight: 700;
    opacity: 1;
    color: #848484;
    padding: 0px;
    z-index: 1;
    transition: all 300ms ease;
    text-transform: uppercase;
}
.header_bottom_container li > a:before {
    position: absolute;
    content: "";
    left: 0px;
    top: 50%;
    height: 3px;
    width: 0px;
    z-index: -1;
    margin-top: -2px;
    background-color: #3786ff;
    transition: all 300ms ease;
    /* display: none; */
}
.header_bottom_container li:hover a,
.header_bottom_container li a.active {
    color: #fff;
    text-decoration: none;
}

.header_bottom_container li:hover a:before,
.header_bottom_container li a.active:before {
    /* display: block; */
    width: 100%;
}
.main_header_fixed {
    width: 100%;
    height: 0;
    /* 70 */
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    /* opacity: 0.4; */
    z-index: 999999;
    transition: all 600ms ease;
}
.main_header_fixed .header_bottom_container:before {
    background-image: none;
}
.main_header_fixed .head_bottom_left {
    width: 20%;
    /* border: 1px solid red; */
    height: 80px;
    background-image: url(assets/logo.png);
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center left;
}
.main_bg{
     background-image: url(./assets/main.jpg);
}
</style>