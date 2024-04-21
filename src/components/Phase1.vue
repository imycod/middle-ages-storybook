<script setup lang="ts">
import {onMounted} from "vue";
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // Create a ScrollTrigger to trigger the animation
  const element =  document.querySelector('.bottom')
  ScrollTrigger.create({
    trigger: "#phase1",
    start: "top center",
    end: "bottom center",
    onEnterBack: () => {
      gsap.set(element, { className: 'bottom hero-anime' });
    },
    animation:  gsap.set(element, { className: 'bottom' }),
  });

})
</script>

<template>
  <div class="mt-4">
    <span>HELLO</span>
  </div>
  <div id="phase1" class="flex justify-between items-center h-[500px]">
    <div class="left"></div>
    <div class="center">
      <div class="top"></div>
      <div class="bottom hero-anime">
        <h1>
          <span>C</span><span>O</span><span>N</span><span>T</span><span>E</span><span>N</span><span>T</span>
        </h1>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<style scoped lang="scss">
.center {
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
  .bottom{
    h1 {
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
</style>