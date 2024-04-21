// @ts-nocheck
import {createRouter, createWebHashHistory} from "vue-router"

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("@/views/Home.vue"),
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

router.beforeEach(async (to, from, next) => {
	next()
})
export default router;