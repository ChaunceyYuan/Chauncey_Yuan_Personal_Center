<template>
    <div class="blogs">
        <!-- <h1>个人博客</h1> -->
        <div>
            <ul class="blog_articles">
                <li v-for="(item,i) in blogs" :key="item['id']">
                    <img :src="bgimgs[i].imgUrl" alt />
                    <router-link
                        tag="div"
                        :to="{path:'/blog/article',query: {arid: ie=item['id']}}"
                    >
                        <h2>{{ item["title"] }}</h2>
                        <p>{{ changeContent(item["content"]) }}</p>
                    </router-link>
                </li>
            </ul>

            <div class="page">
                <ul class="page_btn">
                    <router-link
                        tag="li"
                        :to="{path:'/blog/blogs',query: {page: ie=page<=1?1:page-1,type:ie=type}}"
                    >上一页</router-link>
                    <!-- <li @click="turnPageCheck(page-1)">上一页</li> -->
                    <router-link
                        tag="li"
                        :to="{path:'/blog/blogs',query: {page: ie=page-3,type:ie=type}}"
                        v-show="showLeftPageBtn"
                    >...</router-link>
                    <router-link
                        tag="li"
                        :to="{path:'/blog/blogs',query: {page: ie=ele['page'],type:ie=type}}"
                        v-for="ele in pages"
                        v-show="pageShowCheck(ele['page'])"
                        :class="ele['className']"
                        :key="ele['key']"
                    >{{ ele['page'] }}</router-link>
                    <router-link
                        tag="li"
                        :to="{path:'/blog/blogs',query: {page: ie=page+3,type:ie=type}}"
                        v-show="showRightPageBtn"
                    >...</router-link>
                    <router-link
                        tag="li"
                        :to="{path:'/blog/blogs',query: {page: ie=page >= pages[pages.length - 1].page?pages[pages.length - 1].page:page+1,type:ie=type}}"
                    >下一页</router-link>
                </ul>
            </div>
        </div>
        <div class="blog_opts">
            <h3>文章分类</h3>
            <ul class="types">
                <router-link
                    tag="li"
                    :to="{ path:'/blog/blogs',query: {page: ie=1, type:ie=item['typeName']}}"
                    v-for="item in types"
                    :key="item['typeName']"
                    :class="item['actived']"
                >{{ item['typeName'] }}</router-link>
            </ul>
        </div>
    </div>
</template> 


<script>
// axios引入
import axios from "axios";

export default {
    data() {
        return {
            blogs: [],
            type: "全部",
            types: [],
            pages: [{ key: "page1", page: 1, className: "pageActive" }],
            pageSize: 8,
            page: 1,
            showLeftPageBtn: false,
            showRightPageBtn: false,
            bgimgs: [
                { imgUrl: require("../../assets/blog/blogs/blogs00001.jpg") },
                { imgUrl: require("../../assets/blog/blogs/blogs00002.jpg") },
                { imgUrl: require("../../assets/blog/blogs/blogs00003.jpg") },
                { imgUrl: require("../../assets/blog/blogs/blogs00004.jpg") },
                { imgUrl: require("../../assets/blog/blogs/blogs00005.jpg") },
                { imgUrl: require("../../assets/blog/blogs/blogs00006.jpg") },
                { imgUrl: require("../../assets/blog/blogs/blogs00007.jpg") },
                { imgUrl: require("../../assets/blog/blogs/blogs00008.jpg") },
                { imgUrl: require("../../assets/blog/blogs/blogs00009.jpg") },
                { imgUrl: require("../../assets/blog/blogs/blogs00010.jpg") },
                { imgUrl: require("../../assets/blog/blogs/blogs00011.jpg") }
                // "https://source.unsplash.com/480x0/?code9"
            ]
        };
    },
    methods: {
        pageShowCheck(needCheckPage) {
            if (this.pages.length > 7) {
                if (this.page <= 4) {
                    this.showLeftPageBtn = false;
                    this.showRightPageBtn = true;
                    return needCheckPage <= 7;
                } else if (
                    this.page >= this.pages[this.pages.length - 4].page
                ) {
                    this.showLeftPageBtn = true;
                    this.showRightPageBtn = false;
                    return (
                        needCheckPage >= this.pages[this.pages.length - 7].page
                    );
                } else {
                    this.showLeftPageBtn = true;
                    this.showRightPageBtn = true;
                    return (
                        this.page - 4 < needCheckPage &&
                        this.page + 4 > needCheckPage
                    );
                }
            } else {
                this.showLeftPageBtn = false;
                this.showRightPageBtn = false;
                return true;
            }
        },
        changeContent(str) {
            return str
                .replace(/<[^>]+>/g, "")
                .replace(/[\r\n]/g, "")
                .replace(/(#)|(`)/g, "")
                .replace(/[\r\n]/g, "");
        },
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
        createPages(n) {
            let pages = [];
            for (let i = 0; i < n; i++) {
                pages.push({ key: "page" + i, page: i + 1 });
            }
            this.pages = pages;
        },
        createTypes(keyWords) {
            let keyWordResult = "全部";
            keyWords.forEach(ele => {
                keyWordResult += "," + ele.keyWord;
            });
            Array.from(new Set(keyWordResult.split(","))).forEach(it => {
                this.types.push({ typeName: it });
            });
        },
        turnPageCheck() {
            console.log(this.page);
            if (this.page < 1) {
                this.$router.push({
                    path: "/blog/blogs?page=1&type=" + this.type
                });
                // this.page = 1;
            } else if (this.page > this.pages[this.pages.length - 1].page) {
                this.$router.push({
                    path:
                        "/blog/blogs?page=" +
                        this.pages[this.pages.length - 1].page +
                        "&type=" +
                        this.type
                });
            } else {
                this.$router.push({
                    path: "/blog/blogs?page=" + this.page + "&type=" + this.type
                });
            }
        },
        getBlogs(type, page, flag) {
            console.log(flag);
            // this.turnPageCheck();
            axios
                .get("/api/user/test", {
                    params: {
                        type: type && type == "全部" ? "" : type,
                        page: page,
                        pageSize: this.pageSize
                    }
                })
                .then(res => {
                    console.log(res.data);
                    

                    this.createPages(
                        Math.ceil(res.data.totalNumber / this.pageSize)
                    );

                    this.turnPageCheck();

                    this.setPageActive(this.page);

                    this.types = res.data.types;

                    this.blogs = res.data.data;
                });
        },
        setPageActive(page) {
            for (let i = 0; i < this.pages.length; i++) {
                if (page == i + 1) {
                    this.pages[i].className = "pageActive";
                } else {
                    this.pages[i].className = "";
                }
            }
            // console.log(this.pages);
        },
        setTypesChoosed(type) {
            // console.log(type);
            for (let i = 0; i < this.types.length; i++) {
                if (type == this.types[i].typeName) {
                    this.types[i].actived = "choosed";
                } else {
                    this.types[i].actived = "";
                }
            }
        },
        getSearchParams() {
            // 将查询字符串转换成对象的形式
            return document.location.search
                .replace(/(^\?)/, "")
                .split("&")
                .reduce((searchParams, keyValuePair) => {
                    keyValuePair = keyValuePair.split("=");
                    searchParams[keyValuePair[0]] = keyValuePair[1];
                    return searchParams;
                }, {});
        }
    },
    beforeRouteUpdate(to, from, next) {
        next();
        let paramsObj = this.getSearchParams();
        this.type = decodeURI(paramsObj.type)
            ? decodeURI(paramsObj.type)
            : "全部";
        this.page = Number(paramsObj.page);

        // this.turnPageCheck();

        this.getBlogs(this.type, this.page, "beforeRouteUpdate");
    },
    created() {
        let paramsObj = this.getSearchParams();
        this.type = decodeURI(paramsObj.type)
            ? decodeURI(paramsObj.type)
            : "全部";
        this.page = Number(paramsObj.page);

        // this.turnPageCheck();

        this.getBlogs(this.type, this.page, "created");
    },
};
</script>


<style scoped>
.blogs {
    width: 1200px;
    height: 100%;
    margin: 0px auto;
    padding-top: 100px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-color: rgba(0, 0, 0, 0.3);
}
.blogs div:first-child {
    width: 70%;
}
.blog_articles {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
}
.blog_articles > li {
    width: 48%;
    height: 250px;
    margin-bottom: 35px;
    position: relative;
    border: 1px solid #f0f2f5;
    cursor: pointer;
}
.blog_articles > li > img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: 0;
}
.blog_articles > li > div {
    width: 100%;
    height: 100%;
    opacity: 1;
    padding: 0px 20px;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
}

.blog_articles > li > div > h2 {
    width: 95%;
    color: #fff;
    font-weight: normal;
    font-size: 24px;
    text-align: center;
    position: absolute;
    bottom: 140px;
    left: 50%;
    transform: translate(-50%, 0);
    /* transform: scale(1, 1); */
}
.blog_articles > li > div > p {
    /* border: 1px solid red; */
    width: 90%;
    font-size: 14px;
    color: #bbb;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    position: absolute;
    bottom: 0px;
    opacity: 0;
    left: 50%;
    transform: translate(-50%, 0);
    transition: all 0.6s ease;
}
.blog_articles > li:hover {
    border: 1px solid #3786ff;
}
.blog_articles > li:hover > div > p {
    bottom: 60px;
    opacity: 1;
}
.page {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.page_btn {
    display: flex;
}
.page_btn li {
    width: 40px;
    height: 40px;
    margin: 0 10px;
    text-align: center;
    line-height: 40px;
    font-weight: 600;
    color: #fff;
    font-size: 18px;
    border: 1px solid #fff;
    /* background-color: #fff; */
    cursor: pointer;
    user-select: none;
    position: relative;
}
.page_btn li:first-child,
.page_btn li:last-child {
    width: 70px;
}
.page_btn li:hover,
.page_btn li.pageActive {
    background-color: #3786ff;
}
.blog_opts {
    width: 25%;
    height: 1105px;
    /* border: 1px solid #ff0000; */
    border: 1px solid #f0f2f5;
    margin-bottom: 115px;
    padding: 20px;
    color: #fff;
}
.blog_opts h3 {
    width: 100%;
    font-size: 24px;
    margin-bottom: 10px;
    /* border: 1px solid red; */
}
.blog_opts .types {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
}

.blog_opts .types li {
    padding: 5px 8px;
    font-size: 14px;
    margin: 0px 10px 10px 0px;
    color: #fff;
    position: relative;
    z-index: 1;
    border: 1px solid #fff;
    transition: transform 500ms ease;
    user-select: none;
    cursor: pointer;
}

.blog_opts .types li:before {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    content: "";
    background-color: #3786ff;
    transform: scale(0, 1);
    transform-origin: top right;
    transition: transform 500ms ease;
    transition-timing-function: ease;
}
.blog_opts .types li:hover {
    color: #fff;
    border: 1px solid #3786ff;
}

.blog_opts .types li:hover:before {
    transform: scale(1, 1);
    transform-origin: bottom left;
}

.blog_opts .types li.choosed {
    background-color: #3786ff;
    border: 1px solid #3786ff;
}
</style>