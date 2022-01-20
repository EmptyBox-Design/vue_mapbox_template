<template>
  <div
    id="sidebar"
    class="absolute flex flex-col h-full p-4 bg-white font-Roboto overflow-y-auto"
  >
    <div class="title-box inline-flex" v-if="!aboutToggle">
      <h1 class="font-Roboto text-title text-bold">Title</h1>
      <div class="ml-2 text-gray-75 text-detail self-end">
        v.{{ store.state.version }}
      </div>
    </div>

    <div v-if="!aboutToggle" class="text-detail my-1">Subtitle</div>

    <About v-if="aboutToggle" />

    <div v-if="!aboutToggle" id="analysis-section"></div>
  </div>
  <div
    id="about-toggle"
    class="absolute p-2 z-10 rounded-md transition duration-500 ease-in-out cursor-pointer border bg-yellow-200 hover:bg-yellow-300"
    @click="aboutToggle = !aboutToggle"
  >
    <div class="about-button text-Roboto text-detail font-bold">
      {{ aboutToggle === false ? 'About' : 'Analysis' }}
    </div>
  </div>
  <div
    v-if="loading"
    name="loading-animation"
    class="absolute right-0 top-0 z-10 inline-flex justify-center items-center m-4"
  >
    <div class="flex justify-center items-center">
      <div
        class="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-green-500"
      ></div>
    </div>
    <div class="ml-2 text-RobotoMono text-header">Loading</div>
  </div>
  <div id="map" class="absolute h-screen"></div>
</template>

<script setup>
/**
 * IMPORTS
 */
import { onMounted, ref } from 'vue'
// MAPBOX
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

// VUEX STORE
import { useStore } from 'vuex'
const store = useStore()

import About from '../components/About.vue'

import { mapOptions } from '../assets/data'

let map = null

const aboutToggle = ref(false)

/**
 *
 * MOUNTED
 */
onMounted(() => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoia3BmdWkiLCJhIjoiY2p6MWcxMXl4MDFlbTNsbDc1bnp6N3FjYSJ9.66qFOXwI661MOPOf7x96yA'

  map = new mapboxgl.Map(mapOptions)
  map.on('load', () => {
    console.debug('map loaded')
  })
})

/**
 * @param {Array} coords latitude longitude coordinate pair
 * @return moves the scene camera to the given coordinate location
 */
function flyTo(coords) {
  map.flyTo({
    center: [coords[0], coords[1]],
    zoom: 17,
    speed: 1,
    curve: 1.2,
    easing(t) {
      return t
    }
  })
}
</script>

<style>
#map {
  width: calc(100vw - 600px);
  left: var(--sidebar-width);
  top: 0;

  overflow: hidden;
}

#sidebar {
  width: var(--sidebar-width);
  min-width: var(--sidebar-width);
  left: 0;
  top: 0;
}

.ui-box {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 8px;
}

.select-option {
  border: 1px solid var(--color-theme-black);
}

.pic-box {
  height: 200px;
  border-radius: 8px;
}

#about-toggle {
  right: 15px;
  top: 15px;
}
</style>
