<script setup lang="ts">
// @ts-nocheck
import {Scene, PerspectiveCamera, WebGLRenderer} from "three"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

const experience = ref<HTMLCanvasElement | null>(null)
const scene = new Scene()
const camera = new PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)
scene.add(camera)

onMounted(() => {
  const loader = new GLTFLoader()
  loader.load("./model/scene.gltf", (gltf) => {
    console.log('gltf---',gltf)
    const model = gltf.scene
    model.position.y = -1.2
    scene.add(model)
  }, (xhr) => {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded')
  }, (error) => {
    console.log('加载失败', error)
  })

  const renderer = new WebGLRenderer({
    canvas: experience.value as unknown as HTMLCanvasElement,
    antialias: true,
  })
  renderer.setSize(innerWidth, innerHeight)
  renderer.render(scene, camera)
})
</script>

<template>
  <canvas id="canvas" ref="experience"/>
</template>

<style scoped lang="scss">

</style>