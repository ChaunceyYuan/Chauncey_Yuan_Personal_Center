<template>
    <div class="favoriteMusic">
        <div class="container">
            <div class="title">
                <div>Set yourself up so you don't run out of things to do</div>
                <h2>Favorite Music</h2>
            </div>
            <div class="main">
                <div class="mian_box">
                    <img src="../../assets/home/favoriteMusic/1.jpg" alt="">
                    <div class="overLay">
                    </div>
                    <div class="overLayBox overLayBox1">
                        <span class="fa fa-link"></span>
                    </div>
                    <div class="overLayBox overLayBox2">
                        <span class="fa fa-plus"></span>
                    </div>
                </div>
                <div class="mian_box">
                    <img src="../../assets/home/favoriteMusic/2.jpg" alt="">
                    <div class="overLay">
                    </div>
                    <div class="overLayBox overLayBox1">
                        <span class="fa fa-link"></span>
                    </div>
                    <div class="overLayBox overLayBox2">
                        <span class="fa fa-plus"></span>
                    </div>
                </div>
                <div class="mian_box">
                    <img src="../../assets/home/favoriteMusic/3.jpg" alt="">
                    <div class="overLay">
                    </div>
                    <div class="overLayBox overLayBox1">
                        <span class="fa fa-link"></span>
                    </div>
                    <div class="overLayBox overLayBox2">
                        <span class="fa fa-plus"></span>
                    </div>
                </div>
                <div class="mian_box">
                    <img src="../../assets/home/favoriteMusic/4.jpg" alt="">
                    <div class="overLay">
                    </div>
                   <div class="overLayBox overLayBox1">
                        <span class="fa fa-link"></span>
                    </div>
                    <div class="overLayBox overLayBox2">
                        <span class="fa fa-plus"></span>
                    </div>
                </div>
                <div class="mian_box">
                    <img src="../../assets/home/favoriteMusic/5.jpg" alt="">
                    <div class="overLay">
                    </div>
                    <div class="overLayBox overLayBox1">
                        <span class="fa fa-link"></span>
                    </div>
                    <div class="overLayBox overLayBox2">
                        <span class="fa fa-plus"></span>
                    </div>
                </div>
                <div class="mian_box">
                    <img src="../../assets/home/favoriteMusic/6.jpg" alt="">
                    <div class="overLay">
                    </div>
                   <div class="overLayBox overLayBox1">
                        <span class="fa fa-link"></span>
                    </div>
                    <div class="overLayBox overLayBox2">
                        <span class="fa fa-plus"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.favoriteMusic {
    width: 100%;
    /* height: 1000px; */
    /* margin-top: 8px; */
    /* border: 1px solid red; */
    position: relative;
    padding: 115px 0px 115px;
    background-color: #000;
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
    height: 0;
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    /* transform: scale(0, 1); */
    transition: all 0.6s ease;
}
.mian_box:hover .overLay {
    /* transform: scale(1, 1); */
    height: 100%;
    opacity: 1;
}
.overLay h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    /* border: 1px solid red; */
    line-height: 40px;
    text-transform: uppercase;
    font-weight: 600;
    transition: all 0.6s ease;
    cursor: pointer;
    user-select: none;
}
.overLay h2:hover {
    color: #3786ff;
}
.mian_box > div.overLayBox {
    width: 50px;
    height: 50px;
    /* border: 1px solid red; */
    background-color: #3786ff;
    color: #fff;
    position: absolute;
    opacity: 0;
    transition: all 0.6s ease;
    text-align: center;
    line-height: 50px;
    user-select: none;
    cursor: pointer;
    font-size: 20px;
}
.mian_box > div.overLayBox:hover {
    color: #3786ff;
    background-color: #fff;
}
.mian_box > div.overLayBox1 {
    top: 0;
    left: 30%;
}
.mian_box > div.overLayBox2 {
    top: calc(100% - 50px);
    right: 30%;
}
.mian_box:hover div.overLayBox {
    transform: translate(0, -50%);
    top: 50%;
    opacity: 1;
}
</style>