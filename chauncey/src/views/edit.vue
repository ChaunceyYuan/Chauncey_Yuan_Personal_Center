<template>
    <div class="edit">
        <div class="edit_top">
            <div>设置标题</div>
            <div>
                <input type="text" v-model="title" placeholder="请输入文章标题">
            </div>
            <div @click="saveToDB()">保存文章</div>
        </div>
        <mavonEditor v-model="value" :toolbars="toolbars" :boxShadow="false" @save="save" ref="md"></mavonEditor>
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
            title: "",
            value: "",
            toolbars: {
                bold: true, // 粗体
                italic: true, // 斜体
                header: true, // 标题
                underline: true, // 下划线
                strikethrough: true, // 中划线
                mark: true, // 标记
                superscript: true, // 上角标
                subscript: true, // 下角标
                quote: true, // 引用
                ol: true, // 有序列表
                ul: true, // 无序列表
                link: true, // 链接
                imagelink: true, // 图片链接
                code: true, // code
                table: true, // 表格
                fullscreen: true, // 全屏编辑
                readmodel: true, // 沉浸式阅读
                htmlcode: true, // 展示html源码
                help: true, // 帮助
                undo: true, // 上一步
                redo: true, // 下一步
                trash: false, // 清空
                save: true, // 保存（触发events中的save事件）
                navigation: true, // 导航目录
                alignleft: true, // 左对齐
                aligncenter: true, // 居中
                alignright: true, // 右对齐
                subfield: true, // 单双栏模式
                preview: true // 预览
            }
        };
    },
    components: {
        mavonEditor
    },
    mounted() {
        if (sessionStorage["editBlogTitle"]) {
            this.title = sessionStorage["editBlogTitle"];
        }
        if (sessionStorage["editBlogValue"]) {
            this.value = sessionStorage["editBlogValue"];
        }
    },
    methods: {
        save(md, html) {
            console.log(md);
            sessionStorage.setItem("editBlogTitle", this.title);
            sessionStorage.setItem("editBlogValue", md);
        },
        getNowDate() {
            let now = new Date();
            let y = now.getFullYear();
            let m =
                now.getMonth() + 1 < 10
                    ? "0" + (now.getMonth() + 1)
                    : now.getMonth() + 1;
            let d =
                now.getDate() + 1 < 10
                    ? "0" + (now.getDate() + 1)
                    : now.getDate() + 1;
            let h =
                now.getHours() + 1 < 10
                    ? "0" + (now.getHours() + 1)
                    : now.getHours() + 1;
            let mi =
                now.getMinutes() + 1 < 10
                    ? "0" + (now.getMinutes() + 1)
                    : now.getMinutes() + 1;
            let s =
                now.getSeconds() + 1 < 10
                    ? "0" + (now.getSeconds() + 1)
                    : now.getSeconds() + 1;
            return "" + y + m + d + h + mi + s;
        },
        saveToDB() {
            if (this.title) {
                axios
                    .get("/api/user/saveBlogs", {
                        params: {
                            createDate: this.getNowDate(),
                            title: this.title,
                            content: this.value
                        }
                    })
                    .then(res => {
                        sessionStorage.setItem("editBlogTitle", "");
                        sessionStorage.setItem("editBlogValue", "");
                        if (window.confirm("保存成功！！！再来一篇？")) {
                            this.title = "";
                            this.value = "";
                        } else {
                            this.$router.push({ path: "/blog/blogs?page=1" });
                        }
                    })
                    .catch(err => {
                        alert("保存失败");
                    });
            } else {
                alert("请输入标题");
            }
        }
    }
};
</script>
<style scoped>
.edit {
    width: 100%;
    height: 100%;
}
.edit_top {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.edit_top div {
    width: 80%;
    height: 70px;
    /* border: 1px solid red; */
    line-height: 70px;
    font-size: 20px;
    color: #fff;
    user-select: none;
}
.edit_top div:first-child {
    width: 8%;
    height: 70px;
    text-align: right;
    /* padding: 0 10px 0 40px; */
}
.edit_top div:last-child {
    width: 8%;
    height: 35px;
    line-height: 35px;
    text-align: center;
    margin-right: 10px;
    border-radius: 4px;
    background-color: #cb1916;
    cursor: pointer;
}
.edit_top div input {
    width: 100%;
    height: 45px;
    padding: 0 15px;
    outline: none;
    background: none;
    border: 1px solid #fff;
    border-radius: 4px;
}

.v-note-wrapper {
    width: 100%;
    height: calc(100% - 70px) !important;
}
</style>