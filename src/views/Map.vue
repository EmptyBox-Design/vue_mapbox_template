<template>
  <div id="Map">
    <div class="left-ui text-left frosted-glass p-2">
      <div class="title">
        <h2>Vue Mapbox Template</h2>
        <h4>subtitle</h4>
      </div>
      <div class="">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aliquam,
          cumque tenetur distinctio at porro voluptas, accusantium tempore animi
          odit fugit totam eligendi, earum cum delectus ut assumenda rerum
          quaerat.
        </p>
      </div>
    </div>
    <div id="map-container">
      <MglMap
        :accessToken="accessToken"
        :mapStyle.sync="mapStyle"
        container="map-parent"
        @load="onMapLoaded"
        :zoom="zoom"
        :center="center"
      >
        <MglNavigationControl position="top-right" />
        <MglGeolocateControl position="top-right" />
      </MglMap>
    </div>
  </div>
</template>

<script>
// import mapbox components
import Mapbox from 'mapbox-gl'
import { MglMap, MglNavigationControl, MglGeolocateControl } from 'vue-mapbox'

// import vue store
import { mapGetters } from 'vuex'

// init map placeholder
let map = null

export default {
  name: 'Map',
  data () {
    return {
      accessToken: '',
      mapStyle: '',
      zoom: 13,
      center: [-73.98982976460587, 40.72180744390711]
    }
  },
  components: { MglMap, MglNavigationControl, MglGeolocateControl },
  created () {
    // ATTACHES MAP TO INSTANCE
    this.mapbox = Mapbox
  },
  mounted () {
    // setup mutation subscribers
    this.subscribeToStore()
  },
  computed: {
    // bind store mutations to the vue instance
    ...mapGetters({
      treeData: 'getData'
    })
  },
  methods: {
    onMapLoaded (event) {
      // bind map to vue instance
      map = event.map
      // request tree data
      this.$store.dispatch('readData', {})
    },
    subscribeToStore () {
      this.dataUnsubscribe = this.$store.subscribe(mutation => {
        switch (mutation.type) {
          case 'setData':
            this.createDataSource()
            this.addData()
            break
        }
      })
    },
    createDataSource () {
      map.addSource('tree-data-source', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: this.treeData.features
        }
      })
    },
    addData () {
      map.addLayer({
        id: 'tree-points',
        type: 'circle',
        source: 'tree-data-source',
        paint: {
          'circle-stroke-color': '#333333',
          'circle-stroke-width': 1,
          'circle-radius': {
            'property': 'tree_diameter',
            'stops': [
              [0, 2],
              [8, 4],
              [16, 6],
              [24, 10],
              [32, 12]
            ]
          },
          'circle-color': '#5FFA6A',
          'circle-opacity': 0.75
        }
      })
    }
  }
}
</script>

<style lang="scss">
#Map {
  width: 100vw;
  height: 100vh;
}
.mapboxgl-canvas {
  left: 0;
}
#map-container {
  position: absolute;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;

  overflow: hidden;
}

.left-ui {
  position: absolute;
  left: 15px;
  top: 15px;

  width: 600px;
  height: 400px;

  z-index: 10;
}

.frosted-glass {
  // frosted glass effect
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  background-color: rgba(91, 91, 91, 0.45);

  background-color: transparent;
}
</style>
