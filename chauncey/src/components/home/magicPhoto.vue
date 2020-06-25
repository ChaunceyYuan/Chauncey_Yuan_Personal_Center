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
            <div class="photoBlock">
                <el-carousel trigger="click" arrow="never" height="360px">
                    <el-carousel-item v-for="item in photoText" :key="item['id']">
                        <h6>“</h6>
                        <h6 class="small">{{ item['text'] }}”</h6>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            photoText: [
                {
                    id:"1001",
                    text:
                        "Working with Gamon by bytes speed has been awesome. Our esports program has taken a huge step forward working with their help.They care about the customer and add the personal feel to customer service."
                },
                {
                    id:"1002",
                    text:
                        "Working with Gamon by bytes speed has been awesome. Our esports program has taken a huge step forward working with their help.They care about the customer and add the personal feel to customer service."
                },
                {
                    id:"1003",
                    text:
                        "Working with Gamon by bytes speed has been awesome. Our esports program has taken a huge step forward working with their help.They care about the customer and add the personal feel to customer service."
                }
            ]
        };
    }
};
</script>

<style>
.magicPhoto {
    width: 100%;
    height: 1000px;
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
    bottom: 0px;
    background-color: #000;
}
.content_right {
    width: 45%;
    height: 600px;
    position: absolute;
    right: 0;
    bottom: 0px;
    padding: 120px 120px;
    background-color: #1b1a1a;
    background-image: url(../../assets/home/magicPhoto/bg.png);
    background-repeat: repeat-x;
}
.photoBlock .el-carousel__item h6:first-child {
    font-size: 80px;
    line-height: 90px;
    color: #3786ff;
}
.photoBlock .el-carousel__item h6:last-child{
    position: relative;
    top: -40px;
    color: #ffffff;
    font-size: 24px;
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