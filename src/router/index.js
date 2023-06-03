import { createRouter, createWebHashHistory } from "vue-router"
import record from "../views/record.vue"
import square from "../views/square.vue"
import activity from "../views/activity.vue"
import home from "../views/home.vue"
import diary from "../views/diary.vue"
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", component: home },
        { path: "/record", component: record },
        { path: "/square", component: square },
        { path: "/activity", component: activity },
        { path: "/diary", component: diary ,name:diary}
    ]
})
export default router