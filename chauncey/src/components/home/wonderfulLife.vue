<template>
    <div class="wonderfulLife">
        <div class="container">
            <div class="title">
                <div>Set yourself up so you don't run out of things to do</div>
                <h2>Wonderful Life</h2>
            </div>
            <div class="mainBox">
                <div class="left">
                    <div class="overLay">
                        <div class="playOpen">
                            <span class="fa fa-play"></span>
                        </div>
                        <div class="content">
                            <div>Matches</div>
                            <h2>EXLUSIVE RACING<br>GAME</h2>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="right_top">
                        <h3><span class="fa fa-play"></span>node.js ajax</h3>
                    </div>
                    <div class="right_bottom">
                        <h3><span class="fa fa-play"></span>node.js ajax</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wonderfulLife {
    width: 100%;
    /* height: 910px; */
    /* margin-top: 8px; */
    position: relative;
    padding: 105px 0px 90px;
    background-image: url(../../assets/home/wonderfulLife/bg2.jpg);
    background-size: cover;
    background-position: 0 30px;
    background-repeat: no-repeat;
    background-color: #000;
}
.wonderfulLife:before {
    position: absolute;
    content: "";
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.75);
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
    font-size: 56px;
    color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
}
.mainBox {
    /* border: 1px solid red; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    align-content: space-between;
    margin-right: -15px;
    margin-left: -15px;
    position: relative;
    z-index: 1;
}
.mainBox > div {
    width: 550px;
    height: 520px;
    margin-bottom: 30px;
}
.mainBox .left {
    background-image: url(../../assets/home/wonderfulLife/1.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    /* position: relative; */
    padding: 30px;
}
.mainBox .left .overLay {
    width: 100%;
    height: 100%;
    /* border: 1px solid red; */
    position: relative;
}
.playOpen {
    width: 72px;
    height: 72px;
    /* border: 1px solid red; */
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    background-color: #3786ff;
    /* box-shadow: inset 0 0 45px rgba(0,0,0,0.40); */
    text-align: center;
    line-height: 72px;
    color: #fff;
    font-size: 20px;
    /* box-shadow: 0 0 0 0 rgba(255, 255, 255, .6); */
}
.content {
    position: absolute;
    left: 0px;
    bottom: 0px;
    /* border: 1px solid red; */
}
.content > div {
    position: relative;
    color: #3786ff;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
}
.content > h2 {
    font-size: 30px;
    position: relative;
    color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
    transition: all 0.3s ease;
}
.content > h2:hover {
    color: #3786ff;
}
.mainBox .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.mainBox .right > div {
    width: 550px;
    height: 250px;
    position: relative;
    border: 1px solid #262a2e;
    transition: all 0.5s ease;
    top: 0;
}
.mainBox .right > div:hover {
    border: 1px solid #3786ff;
    top: -5px;
}
.mainBox .right > .right_top {
    background-image: url(../../assets/home/wonderfulLife/2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}
.mainBox .right > .right_bottom {
    background-image: url(../../assets/home/wonderfulLife/3.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}
.mainBox .right > div > h3 {
    position: absolute;
    left: 0px;
    bottom: 0px;
    color: #ffffff;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    display: inline-block;
    text-transform: uppercase;
    padding: 24px 30px;
    line-height: 30px;
    margin: 0;
    background-color: rgba(55, 134, 255, 0.8);
}
.mainBox .right > div > h3>span{
    margin-right: 20px;
    font-size: 20px;
}
</style>