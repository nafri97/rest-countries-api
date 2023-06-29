
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home2.vue'
import Details from './components/Details.vue'
import DetailsAlpha from './components/DetailsAlpha.vue'
import Region from './components/Region.vue'
const routes = [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/name/:id',
            name: 'Details',
            component: Details,
            props: true
        },
        {
            path: '/code/:alpha',
            name: 'DetailsAlpha',
            component: DetailsAlpha,
            props: true
        },
        {
            path: '/Region/:reg',
            name: 'Region',
            component: Region,
            props: true
        }
]

const router = createRouter ({
    history : createWebHistory(),
    routes
})

export default router