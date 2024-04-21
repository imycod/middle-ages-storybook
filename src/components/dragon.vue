<script setup lang="ts">
// @ts-nocheck
import {
  AmbientLight,
  Camera,
  GltfModel,
  Renderer,
  Scene,
  Sphere,
  Texture,
  StandardMaterial,
  PointLight
} from 'troisjs';


onMounted(() => {

})
</script>

<template>
  <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true ,autoRotate: true, dampingFactor: 0.05}" resize>
    <Camera :position="{ x: -10, y: 7, z: 20 }" :fov="45" :near="0.1" :far="100"/>
    <Scene>
      <AmbientLight></AmbientLight>
      <PointLight color="#fff" :intensity="3" :position="{  x: -10, y: 1000, z: 20 }"/>
      <!--      <PointLight color="#fff" :intensity="0.75" :position="{ x: 0, y: 0, z: 20 }"/>-->
      <GltfModel src="/assets/models/black_dragon_with_idle_animation.glb"/>
      <!--      <Sphere ref="mesh" :radius="2.5" :width-segments="200" :height-segments="200">-->
      <!--        <StandardMaterial :props="{ displacementScale: 0.2 }">-->
      <!--          <Texture src="/assets/textures/EYES_baseColor.jpeg"/>-->
      <!--          <Texture src="/assets/textures/EYES_metallicRoughness.png"/>-->
      <!--          <Texture src="/assets/textures/Game_dragon.001_metallicRoughness.png"/>-->
      <!--          <Texture src="/assets/textures/Game_dragon_clearcoat.png"/>-->
      <!--          <Texture src="/assets/textures/Game_dragon_metallicRoughness.png"/>-->
      <!--          <Texture src="/assets/textures/Game_dragon_normal.jpeg"/>-->
      <!--          <Texture src="/assets/textures/Material_baseColor.jpeg"/>-->
      <!--          <Texture src="/assets/textures/Material_metallicRoughness.png"/>-->
      <!--          <Texture src="/assets/textures/Material_normal.png"/>-->
      <!--        </StandardMaterial>-->
      <!--      </Sphere>-->
    </Scene>
  </Renderer>
</template>

<style scoped lang="scss">

</style>