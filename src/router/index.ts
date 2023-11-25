import {createRouter, createWebHistory} from 'vue-router'
import OngoingTaskPane from "@/components/ongoingTask/OngoingTaskPane.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'ongoing-task-pane',
            component: OngoingTaskPane
        },
        {
            path: '/historic',
            name: 'historic-task-pane',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/components/historicTask/HistoricTaskPane.vue')
        }
    ]
})

export default router
