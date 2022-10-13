import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import Test from '../views/Test.vue';

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;