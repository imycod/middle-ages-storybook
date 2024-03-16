<script setup lang="ts">
</script>

<template>
  <div class="bg-cover h-[100vh] bg-center overflow-hidden">
    <div class="h-[100px] w-[100vw] px-20 opacity-[.8] flex items-center text-center"
         style="background: #304660;">
      <div class="w-full flex justify-between items-center">
        <img class="left w-[60px]" src="@/assets/img/logo.png" alt="">
        <div class="center flex items-center text-white justify-between w-[700px]">
          <div class="flex items-center justify-center">
            <span>阅读小说</span>
            <img class="ml-2 w-[5px]" src="@/assets/img/arrow-right.png" alt="">
          </div>
          <div class="flex items-center justify-center">
            <span>探索世界</span>
            <img class="ml-2 w-[5px]" src="@/assets/img/arrow-right.png" alt="">
          </div>
          <div class="flex items-center justify-center">
            <span>纵观历史</span>
            <img class="ml-2 w-[5px]" src="@/assets/img/arrow-right.png" alt="">
          </div>
        </div>
        <div class="right w-[180px] flex items-center justify-between">
          <img class="left w-[50px]" src="@/assets/img/blibli.png" alt="">
          <img class="left w-[50px]" src="@/assets/img/qq.png" alt="">
          <img class="left w-[50px]" src="@/assets/img/wetchat.png" alt="">
        </div>
      </div>
    </div>
    <div class="contain h-full">
      <div class="m-auto text-center mt-36 w-[600px]">
        <h1 class="title w-full">猎龙曲</h1>
        <h4 class="subtitle w-full">原创长篇奇幻小说及设定集</h4>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.bg-cover {
  background: url("@/assets/img/home-bg.png") no-repeat;
  background-size: cover;
}

@media (min-width: 768px) {
  .bg-cover {
    background: url("@/assets/img/home-bg.png") no-repeat;
    background-size: 100% 100%;
  }
}

.center {
  span {
    font-family: 'pmzd';
  }
}

.contain{
  .title{
    font-size: 80px;
    color: #545454;
  }
  .subtitle{
    font-size: 50px;
    color: #545454;
  }
}
</style>