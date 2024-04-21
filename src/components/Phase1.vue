<script setup lang="ts">
import dragon from "./dragon.vue"
import {onMounted} from "vue";
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const volume = [
  {
    index: '01',
    title: 'Volume.',
    vol_no: '01',
    vol_desc: '《猎龙曲》第一卷，讲述了猎龙曲的诞生，以及猎龙曲的创作过程。'
  },
  {
    index: '02',
    title: 'Volume.',
    vol_no: '02',
    vol_desc: '《猎龙曲》第二卷，讲述了猎龙曲的创作过程。'
  },
  {
    index: '03',
    title: 'Volume.',
    vol_no: '03',
    vol_desc: '《猎龙曲》第三卷，讲述了猎龙曲的创作过程。'
  },
  {
    index: '04',
    title: 'Volume.',
    vol_no: '04',
    vol_desc: '《猎龙曲'
  },
  {
    index: '05',
    title: 'Volume.',
    vol_no: '05',
    vol_desc: '《猎龙曲》第五卷，讲述了猎龙曲的创作'
  },
  {
    index: '06',
    title: 'Volume.',
    vol_no: '06',
    vol_desc: '《猎龙曲》第六卷，讲述了猎龙曲的创作过程。'
  },
  {
    index: '07',
    title: 'Volume.',
    vol_no: '07',
    vol_desc: '《猎龙曲》第七卷，讲述了猎龙曲的创作过程。'
  },
]

onMounted(() => {
  // Create a ScrollTrigger to trigger the animation
  // const element = document.querySelector('.bottom')
  // ScrollTrigger.create({
  //   trigger: "#phase1-container",
  //   start: "top center",
  //   end: "bottom center",
  //   onEnterBack: () => {
  //     gsap.set(element, {className: 'bottom hero-anime'});
  //   },
  //   animation: gsap.set(element, {className: 'bottom'}),
  // });
})
</script>

<template>
  <div id="phase1-container" class="phase1-container">
    <div class="mask"></div>
    <div class="content-area flex pl-24 pt-40 pr-24 justify-between h-[90vh]">
      <div class="left">
        <ul>
          <li class="volume relative mb-8 hover:border-r-2 hover:cursor-pointer" v-for="vol in volume" :index="vol.index">
            <div>
              <span class="vol text-white font-bold text-3xl">{{ vol.title }}</span>
              <span class="no text-red-800 font-bold text-3xl">{{ vol.vol_no }}</span>
            </div>
            <div class="vol-desc text-white mt-1" :title="vol.vol_desc">{{ vol.vol_desc }}</div>
            <img class="absolute -left-2 top-2 w-[90%] h-[100%]" src="@/assets/img/c-doc.png" alt="">
          </li>
        </ul>
      </div>
      <div class="center flex-col flex-1">
        <div id="dragon" class="top flex justify-center">
          <div class="w-[900px] h-[500px]">
            <dragon></dragon>
          </div>
        </div>
        <div class="bottom mt-5">
          <h1 class="text-white text-center space-x-10">
            <span>C</span><span>O</span><span>N</span><span>T</span><span>E</span><span>N</span><span>T</span>
          </h1>
        </div>
      </div>
      <div class="right">
        <div class="title text-white text-3xl mb-8">
          剧情简介
        </div>
        <span class="text-white">
            这是一部多角色、多故事线的史诗奇幻著作，世界观设定融入了众多东方与西方的经典奇幻元素。在《猎龙曲》的世界里，东方文明与西方文明交相辉映，全书将从一个点徐徐展开，陆续引出不同的视点人物和故事分支，并最终辐射到整个世界，其中视点人物既有国王皇帝，又有平民奴仆，既有剑客游侠，又有公卿贵族，故事分支则包括了宫廷权谋、沙场征战、奇幻冒险等方方面面，囊括了亲情、爱情、友情、家国天下、正邪相争等众多主题。
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.phase1-container {
  position: relative;
  top: 100vh;
  left: 0px;

  .mask {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    z-index: 1;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); /* 调整这里的颜色和透明度 */
  }

  .content-area {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 3;

    .left {
      width: 20%;
      font-family: '宋体';

      .volume {
        //&:before{
        //  content:'';
        //  display: inline-block;
        //  position: absolute;
        //  width: 100%;
        //  height: 100%;
        //  background: url('@/assets/img/c-doc.png') no-repeat;
        //}
        .no {
        }

        .vol-desc {
          // 单行打点
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
    }

    .right {
      width: 15%;

      .title {
        font-family: '黑体';
      }
    }

    .center {
      width: 60%;

      .bottom.hero-anime {
        h1 {
          span {
            &:nth-child(1) {
              opacity: 0;
              transform: translateY(-20px);
            }

            &:nth-child(2) {
              opacity: 0;
              transform: translateY(-30px);
            }

            &:nth-child(3) {
              opacity: 0;
              transform: translateY(-50px);
            }

            &:nth-child(4) {
              opacity: 0;
              transform: translateY(-10px);
            }

            &:nth-child(5) {
              opacity: 0;
              transform: translateY(-50px);
            }

            &:nth-child(6) {
              opacity: 0;
              transform: translateY(-20px);
            }

            &:nth-child(7) {
              opacity: 0;
              transform: translateY(-40px);
            }
          }
        }
      }

      .bottom {
        font-family: '宋体';
        font-weight: bolder;

        h1 {
          font-size: 70px;

          span {
            &:nth-child(1) {
              transition-delay: 1000ms;
            }

            &:nth-child(2) {
              transition-delay: 700ms;
            }

            &:nth-child(3) {
              transition-delay: 900ms;
            }

            &:nth-child(4) {
              transition-delay: 800ms;
            }

            &:nth-child(5) {
              transition-delay: 1000ms;
            }

            &:nth-child(6) {
              transition-delay: 700ms;
            }

            &:nth-child(7) {
              transition-delay: 900ms;
            }
          }
        }
      }
    }
  }

}
</style>