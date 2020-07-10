import vue from 'vue';
import vueRouter from 'vue-router';

vue.use(vueRouter);

export default new vueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('../views/LoginView.vue'),
        },
        {
            path: '/main',
            component: () => import('../views/MainView.vue'),
        },
        {
            path: '/robot',
            component: () => import('../views/RobotView.vue'),
        },
        {
            path: '/process',
            component: () => import('../views/ProcessView.vue'),
        },
        {
            path: '/releaseProcess',
            component: () => import('../views/ReleaseProcess.vue'),
        },
        {
            path: '/user',
            component: () => import('../views/UserView.vue'),
        },
        {
            path: '/libraries',
            component: () => import('../views/LibrariesView.vue'),
        }
    ]
})