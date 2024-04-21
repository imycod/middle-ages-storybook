// @ts-nocheck
import {createRouter, createWebHashHistory} from "vue-router"
// import {useUserInfo} from "@/stores/userInfo.ts";

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("@/views/Home.vue"),
	},
	{
		path: "/other",
		name: "Other",
		component: () => import("@/views/Other.vue"),
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

router.beforeEach(async (to, from, next) => {
	// const userInfoStore = useUserInfo()
	// userInfoStore.setUserInfo({name: 'wxs'})
	next()
})
export default router;