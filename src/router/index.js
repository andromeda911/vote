import Vue from 'vue'
import VueRouter from 'vue-router'

import _404 from './views/_404.vue'

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
        path: '/current',
        name: 'current',
        // route level code-splitting
        // this generates a separate chunk (current.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "current" */ './views/current.vue'),
    },
    {
        path: '/topic',
        name: 'topic',
        // route level code-splitting
        // this generates a separate chunk (topic.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "topic" */ './views/topic.vue'),
    },
    {
        path: '/vote/:id',
        name: 'vote',
        // route level code-splitting
        // this generates a separate chunk (vote.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "vote" */ './views/vote.vue'),
    },
    {
        path: '/completed',
        name: 'completed',
        // route level code-splitting
        // this generates a separate chunk (completed.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "completed" */ './views/completed.vue'),
    },
    {
        path: '*',
        name: '_404',
        component: _404,
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
