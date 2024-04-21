// @ts-nocheck
import {defineStore} from "pinia";

export const useUserInfo = defineStore('userInfo', {
	state: () => {
		return {
			userInfo: null
		}
	},
	getters: {
		getUserInfo() {
			return this.userInfo;
		}
		,
		actions: {
			setUserInfo(payload) {
				this.userInfo = payload
			},
			deleteUserInfo() {
				this.userInfo = null
			}
		},
		persist: {
			enabled: true,
			strategies: [
				{
					storage: localStorage,
					paths: ["userInfo"]
				}
			]
		}
	}
})