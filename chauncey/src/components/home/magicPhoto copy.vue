<template>
    <div class="magicPhoto">
        <h2>
            <span>there are several<br>magic photos<br>for you</span>
        </h2>
        <div class="btnBox">
            <router-link to="/photo" class="btn">Learn more</router-link>
        </div>
        <div class="content_left"></div>
        <div class="content_right">
            
        </div>
    </div>
</template>

<style scoped>
.magicPhoto {
    width: 100%;
    height: 1100px;
    position: relative;
    /* border: 1px solid red; */
    padding: 115px 0px 0px 0;
    background-color: rgba(0, 0, 0, 0.3);
}
.magicPhoto h2 {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    color: #ffffff;
    font-size: 56px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: 1px;
    margin-bottom: 40px;
    text-transform: uppercase;
}
.content_left {
    width: 55%;
    height: 400px;
    position: absolute;
    left: 0;
    bottom: 10px;
    background-color: #000;
}
.content_right {
    width: 45%;
    height: 600px;
    position: absolute;
    right: 0;
    bottom: 10px;
    padding: 100px 50px 110px 150px;
    background-color: #1b1a1a;
    background-image: url(../../assets/home/magicPhoto/bg.png);
    background-repeat: repeat-x;
}
.content_right > .right_container {
    width: 70%;
    height: 100%;
}
.content_right > .right_container > div,
.carousel-inner,
.carousel-inner .item,
.carousel-caption {
    width: 100%;
    height: 100%;
}
.carousel-indicators{
    width: 60px;
    left: 110%;
}
.carousel-indicators li {
    width: 12px;
    height: 12px;
    border: none;
    margin: 0 3px;
    background-color: #4d4d4d;
}
.carousel-indicators li.active,
.carousel-indicators li:hover {
    margin: 0 3px;
    background-color: #3786ff;
    cursor: not-allowed;
}
.carousel-caption {
    left: 0;
    right: 0;
    bottom: 0;
}
.carousel-caption > p {
    text-align: left;
}
.carousel-caption > p:first-child {
    font-size: 120px;
    line-height: 80px;
    color: #3786ff;
}
.carousel-caption > p:last-child {
    position: relative;
    color: #ffffff;
    font-size: 24px;
    margin-top: -50px;
    overflow: hidden;
    line-height: 45px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    line-clamp: 8;
    -webkit-box-orient: vertical;
}

.magicPhoto .btnBox {
    width: 1200px;
    margin: 0 auto;
}
.magicPhoto .btn {
    padding: 10px 50px;
    font-size: 24px;
    border-radius: 0;
    border: none;
    position: relative;
    z-index: 1;
    background-color: #3786ff;
    color: #fff;
}
.magicPhoto .btn:before {
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
.magicPhoto .btn:hover {
    color: #3786ff;
}
.magicPhoto .btn:hover:before {
    transform: scale(1, 1);
    transform-origin: bottom left;
}
</style>