<script setup lang="ts">
import ProgressiveImage from "@/components/ProgressiveImage.vue"
import musicSrc from '@/assets/song/act1.mp3'
import originUrl from "@/assets/img/home-bg.png"
import placeholderUrl from "@/assets/img/home-bg35k.jpg"

function autoPlayMusic() {
  // 尝试自动播放音频
  const audio = audioPlayer.value;
  if (audio) {
    audio.play().catch(() => {
      console.log('由于浏览器限制，需要您先进行一次交互操作才能播放音乐');
    });
  }
}

const audioPlayer = ref<HTMLAudioElement>();
onMounted(() => {
  audioPlayer.value.addEventListener('ended', autoPlayMusic);
  autoPlayMusic()
});
onUnmounted(() => {
  audioPlayer.value.removeEventListener('ended', autoPlayMusic);
});
</script>

<template>
  <div class="home h-[100vh] bg-center overflow-hidden" @click="autoPlayMusic">
    <ProgressiveImage class="progress" :origin="originUrl" :placeholder="placeholderUrl"></ProgressiveImage>
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
  <audio ref="audioPlayer" v-show="false" :src="musicSrc" autoplay loop controls></audio>
</template>

<style scoped lang="scss">
.home {
  position: relative;

  .progress {
    position: absolute;
    top: 0;
    left: 0;
  }

  .center {
    span {
      font-family: 'pmzd';
      letter-spacing: .3em;
    }
  }

  .contain {
    position: absolute;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
    .title {
      font-size: 80px;
      font-family: 'stxingka';
      color: #545454;
    }

    .subtitle {
      font-family: 'stxingka';
      font-size: 50px;
      color: #545454;
    }
  }
}
</style>