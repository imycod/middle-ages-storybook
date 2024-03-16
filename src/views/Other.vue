<script setup lang="ts">
import {useUserInfo} from "@/stores/userInfo.ts";

const userInfoStore = useUserInfo()

function clearUserInfo() {
  userInfoStore.deleteUserInfo()
}

const visible = ref(false)
function openDialog() {
  visible.value = true
}
</script>

<template>
  <div class="w-full h-full bg-red-400">
    other - {{ userInfoStore.getUserInfo }}
  </div>
  <el-dialog v-model="visible">
    111
  </el-dialog>
  <el-button :bg="true" @click="clearUserInfo">clearUserInfo</el-button>
  <el-button type="primary" @click="openDialog">open dialog</el-button>
</template>

<style scoped lang="scss">

</style>