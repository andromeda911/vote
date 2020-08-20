import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (home.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ './views/home.vue'),
    },
    {
        path: '/vote-list',
        name: 'voteList',
        // route level code-splitting
        // this generates a separate chunk (votelist.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "votelist" */ './views/vote-list.vue'),
    },
    {
        path: '/vote/:id',
        name: 'vote',
        // route level code-splitting
        // this generates a separate chunk (vote.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "vote" */ './views/vote.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,

    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
})

export default router