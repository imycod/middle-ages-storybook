<script setup lang="ts">
// @ts-nocheck
defineProps({
  placeholder: {
    type: String,
    required: true
  },
  origin: {
    type: String,
    required: true
  }
})

function onLoad(e) {
  e.target.parentElement.classList.add('loaded')
}
</script>

<template>
  <div class="progressive">
    <img class="img placeholder" :src="placeholder" alt="">
    <img @load="onLoad" class="img origin" :src="origin" alt="">
  </div>
</template>

<style scoped lang="scss">
.progressive {
  position: relative;

  img {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    object-fit: cover;
    display: block;
  }

  .origin {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    filter: blur(10px);
  }
}

.loaded {
  .origin {
    opacity: 1;
    filter: blur(0);
  }
}
</style>