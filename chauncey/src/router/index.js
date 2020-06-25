import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}



export default new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    linkExactActiveClass: 'exact-active',
    linkActiveClass: 'active',
    routes: [
        // 首页
        {
            path: '/home',
            name: 'Home',
            component: home
        },
        // 博客
        {
            path: '/blog',
            name: 'Blog',
            redirect: "blog/blogs",
            component: () =>
                import ('../views/blog.vue'),
            children: [{
                path: 'blogs',
                name: 'Blogs',
                component: () =>
                    import ('../views/blog/blogs.vue'),
            }, {
                path: 'article',
                name: 'Article',
                component: () =>
                    import ('../views/blog/article.vue'),
            }]
        },
        // 生活
        {
            path: '/life',
            name: 'Life',
            component: () =>
                import ('../views/life.vue')
        },
        // 音乐
        {
            path: '/music',
            name: 'Music',
            component: () =>
                import ('../views/music.vue')
        },
        // 照片
        {
            path: '/photo',
            name: 'Photo',
            component: () =>
                import ('../views/photo.vue')
        },
        // 关于
        {
            path: '/about',
            name: 'About',
            component: () =>
                import ('../views/about.vue')
        },
        // 编辑
        {
            path: '/edit',
            name: 'Edit',
            component: () =>
                import ('../views/edit.vue'),
        },
        // 错误404
        {
            path: '/error',
            name: 'Error',
            component: () =>
                import ('../views/error.vue')
        },
        // 配置路径页面
        {
            path: "*",
            redirect(to) {
                if (to.path === "/") {
                    return "/home";
                } else {
                    return "/error";
                }
            }
        }
    ]
})