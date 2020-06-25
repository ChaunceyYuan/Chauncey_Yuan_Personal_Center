<template>
    <div class="boutiqueBlog">
        <div class="container">
            <div class="title">
                <div>Set yourself up so you don't run out of things to do</div>
                <h2>Boutique Web Blog</h2>
            </div>
            <div class="main">
                <div class="mian_box">
                    <img src="../../assets/home/boutiqueBlog/1.jpg" alt="">
                    <div class="overLay">
                        <!-- <h2></h2> -->
                        <router-link tag="h2" to="/blog/article?arid=10001">vue<br>导航守卫</router-link>
                    </div>
                </div>
                <div class="mian_box">
                    <img src="../../assets/home/boutiqueBlog/2.jpg" alt="">
                    <div class="overLay">
                        <router-link tag="h2" to="/blog/article?arid=10002">vue案例<br>axios实战</router-link>
                    </div>
                </div>
                <div class="mian_box">
                    <img src="../../assets/home/boutiqueBlog/3.jpg" alt="">
                    <div class="overLay">
                        <router-link tag="h2" to="/blog/article?arid=10003">MacOS安装<br>MongoDB数据库</router-link>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="text">The original name of the blog was Weblog, which was composed of two words: web and log, which literally meant web diary. Later, those who liked the new name changed the pronunciation of the word on purpose and pronounced it as "we blog". Thus, the word "blog" was coined. In Chinese, it means Blog or weblog. However, some people in mainland China often transliterate both Blog and blogger as "Blog".</div>
                <router-link to="/blog/blogs?page=1&type=全部" tag="button">Learn more</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.boutiqueBlog {
    width: 100%;
    /* height: 1000px; */
    /* margin-top: 8px; */
    /* border: 1px solid red; */
    position: relative;
    padding: 115px 0px 115px;
    background-color: #000;
}
.boutiqueBlog:before {
    position: absolute;
    content: "";
    left: 0px;
    top: 0px;
    right: 0px;
    height: 213px;
    background-image: url(../../assets/home/boutiqueBlog/1.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0px;
}
.container {
    position: static;
    max-width: 1200px;
    padding: 0px 15px;
    margin: 0 auto;
}
.title {
    position: relative;
    z-index: 1;
    margin-bottom: 60px;
    /* border: 1px solid red; */
    text-align: center;
}
.title > div {
    position: relative;
    display: block;
    font-size: 18px;
    color: #3786ff;
    font-weight: 400;
    margin-bottom: 10px;
    letter-spacing: 1px;
}
.title > h2 {
    position: relative;
    display: block;
    font-size: 48px;
    color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
}

.main {
    /* border: 1px solid red; */
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    /* margin-right: -15px; */
    /* margin-left: -15px; */
}
.mian_box {
    width: 340px;
    height: 340px;
    /* border: 1px solid red; */
    margin-bottom: 30px;
    position: relative;
}
.mian_box img {
    width: 100%;
    height: 100%;
}
.overLay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    transform: scale(0, 1);
    transition: all 0.6s ease;
}
.mian_box:hover .overLay {
    transform: scale(1, 1);
}
.overLay h2 {
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    /* border: 1px solid red; */
    line-height: 40px;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 600;
    transition: all 0.6s ease;
    cursor: pointer;
    user-select: none;
}
.overLay h2:hover{
    color: #3786ff;
}
.bottom{
    position: relative;
    padding-top: 30px;
    text-align: center;
    /* border: 1px solid red; */
}
.bottom .text{
    position: relative;
    color: #848484;
    font-size: 20px;
    max-width: 780px;
    margin: 0 auto;
    line-height: 1.7em;
    margin-bottom: 40px;
}

.bottom button {
    border-radius: 0;
    font-size: 20px;
    padding: 10px 20px;
    color: #fff;
    border: none;
    position: relative;
    z-index: 1;
    outline: none;
    background-color: #3786ff;
}
.bottom button:before {
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
.bottom button:hover {
    color: #3786ff;
}
.bottom button:hover:before {
    transform: scale(1, 1);
    transform-origin: bottom left;
}
</style>