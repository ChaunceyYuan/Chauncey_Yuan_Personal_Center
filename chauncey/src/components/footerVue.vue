<template>
    <div class="footerVue">
        <div class="container">
            <div class="container_top">
                <div class="content">
                    <div class="left">
                        <p>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected.</p>
                    </div>
                    <div class="middle">
                        <ul>
                            <li>links</li>
                            <li></li>
                            <li>Blog</li>
                            <li>友情链接1</li>
                            <li>Life</li>
                            <li>友情链接2</li>
                            <li>Music</li>
                            <li>友情链接3</li>
                            <li>Photo</li>
                            <li>友情链接4</li>
                        </ul>
                    </div>
                    <div class="right">
                        <ul>
                            <li>recommendation</li>
                            <li></li>
                            <li>If you have good Suggestions, please send them to my email</li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li>
                                <a href="mailto:chauncey_yuan@icloud.com">chauncey_yuan@icloud.com
                                    <span class="fa fa-envelope"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="head_top">
            <div class="header_top_container">
                <div class="welcome">© Copyrights, 2020 All Rights Reserved
                    <a href="http://www.beian.miit.gov.cn" target="_blank">鄂ICP备20010774号</a>
                </div>
                <ul class="otherLink">
                    <li><a href="#"><span class="fab fa-qq"></span></a></li>
                    <li><a href="#"><span class="fab fa-weixin"></span></a></li>
                    <li><a href="#"><span class="fab fa-weibo"></span></a></li>
                    <li><a href="#"><span class="fab fa-github"></span></a></li>
                </ul>
            </div>
        </div>Í
    </div>
</template>


<style scoped>
.footerVue {
    width: 100%;
    height: 500px;
    background-color: #000;
    background-image: url(../assets/footer_bg.png);
    background-repeat: no-repeat;
    position: relative;
}
.container {
    max-width: 1200px;
    /* padding: 0px 15px; */
    margin: 0 auto;
    /* border: 1px solid red; */
}
.container_top {
    /* width: 100%; */
    position: relative;
    padding: 100px 0px 70px;
}
.content {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    align-content: space-between;
}
.content div {
    width: 400px;
    min-height: 100px;
    /* border: 1px solid red; */
}
.content div.left {
    background-image: url(../assets/logo.png);
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: 0 15px;
}
.content div.left p {
    margin-top: 80px;
    color: #848484;
    font-size: 16px;
    line-height: 30px;
}
.content div.middle ul,
.content div.right ul {
    width: 100%;
    padding: 0 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
}
.content div.middle ul li,
.content div.right ul li {
    width: 35%;
    height: 36px;
    /* border: 1px solid red; */
    text-align: left;
    padding-top: 18px;
    color: #848484;
    white-space: nowrap;
}
.content div.middle ul li:first-child,
.content div.right ul li:first-child {
    color: #fff;
    font-size: 18px;
    padding-top: 0px;
    text-transform: uppercase;
}
.content div.right ul li a {
    width: 320px;
    height: 80px;
    /* border: 1px solid red; */
    color: #848484;
    text-align: left;
    padding: 30px 20px;
    background-color: #1b1a1a;
    position: relative;
}
.content div.right ul li a span {
    position: absolute;
    right: 40px;
    top: 50%;
    color: #fff;
    transform: translate(0%, -50%);
}

.head_top {
    width: 100%;
    background-color: #0c0a0a;
    background-image: url(../assets/footer_bottom_bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    bottom: 0;
    left: 0;
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
    background: none;
    /* background-image: url(../assets/logo.png);
    background-repeat: no-repeat;
    background-size: 15%;
    background-position: bottom center; */
}
.welcome a {
    margin-left: 30px;
    font-size: 16px;
    color: #838383;
    font-weight: 400;
}
</style>