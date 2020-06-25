<template>
    <div class="article">
        <h1>{{ article["title"] }}</h1>
        <div class="article_status">
            <div class="article_status_left">
                <p>{{ changeDate(article["createDate"]) }}</p>
                <p>阅读：{{ article["watchTimes"] }}</p>
                <p @click=iLiked()>点赞：{{ ilike }}</p>
            </div>
            <div class="article_status_right">
                <p>标签：{{ changeKeyWord(article["keyWord"]) }}</p>
            </div>
        </div>
        <mavon-editor :value="article['content']" defaultOpen="preview" :boxShadow="false" :editable="false" :subfield="false" :toolbarsFlag="false" ></mavon-editor>
    </div>
</template>


<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

// axios引入
import axios from "axios";

export default {
    data() {
        return {
            article: [],
            id: 1001,
            watchTimes: 0,
            ilike: 0,
            liked: false
        };
    },
    components: {
        mavonEditor
    },
    beforeMount() {
        let searchObj = {};
        location.search
            .slice(1)
            .split("&")
            .forEach(ele => {
                searchObj[ele.split("=")[0]] = ele.split("=")[1];
            });
        this.id = searchObj.arid;
    },
    methods: {
        changeDate(str) {
            if (!str || str.length != 14) {
                return "1970-01-01 00:00:00";
            } else {
                return `${str.slice(0, 4)}-${str.slice(4, 6)}-${str.slice(
                    6,
                    8
                )} ${str.slice(8, 10)}:${str.slice(10, 12)}:${str.slice(12)}`;
            }
        },
        changeKeyWord(str) {
            if (str) {
                return str.split(",").join("、");
            } else {
                return "暂无";
            }
        },
        iLiked() {
            if (!this.liked) {
                this.ilike += 1;
                this.liked = true;
                axios
                    .get("/api/user/ilike", {
                        params: {
                            id: this.id,
                            like: this.ilike
                        }
                    })
                    .then(res => {
                        // console.log("点赞+1");
                    })
                    .catch(err => {
                        // console.log("点赞失败！");
                    });
            }
        }
    },
    mounted() {
        axios
            .get("/api/user/getArticle", {
                params: {
                    id: this.id
                }
            })
            .then(res => {
                // 成功的处理操作
                // console.log("success");
                // console.log(res.data);
                if (res.data && res.data.length > 0) {
                    this.article = res.data[0];
                    this.ilike = Number(res.data[0].ilike);
                    this.watchTimes = Number(res.data[0].watchTimes) + 1;

                    axios
                        .get("/api/user/changeWatchTimes", {
                            params: {
                                id: this.id,
                                watchTimes: this.watchTimes
                            }
                        })
                        .then(res => {
                            // console.log("访问量+1");
                        })
                        .catch(err => {
                            // console.log("访问量更新失败！");
                        });

                    // console.log(res.data);
                } else {
                    this.article = [];
                    // console.log("暂无数据！！！");
                    this.$router.push({ path: "/error" });
                }
            })
            .catch(err => {
                // 失败
                // console.log("fail");
                // console.log(err);
                this.article = [];
                // console.log("数据获取失败！！！");
                this.$router.push({ path: "/error" });
            });
    }
};
</script>

<style scoped>
.article {
    width: 1200px;
    margin: 0 auto;
    padding: 0 100px 50px 100px;
    background-color: rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 99;
}
.article h1 {
    margin: 0;
    padding-top: 50px;
    color: #fff;
    /* border: 1px solid red; */
}
.article_status {
    width: 100%;
    height: 40px;
    /* border: 1px solid red; */
    margin-bottom: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.article_status_left {
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid red; */
}
.article_status_left p,
.article_status_right p {
    display: block;
    min-width: 50px;
    font-size: 14px;
    margin: 0;
    color: #bbb;
    text-align: center;
    /* border: 1px solid green; */
}
.article_status_left p:last-child {
    user-select: none;
    cursor: pointer;
}
</style>