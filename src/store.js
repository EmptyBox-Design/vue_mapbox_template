import { createStore } from 'vuex'
import { json } from 'd3-fetch'

import { version } from '../package.json'

export const store = createStore({
  state() {
    return {
      count: 1,
      version: version || '0'
    }
  },
  mutations: {
    setMeshData(state, newMeshData) {
      state.meshData = newMeshData
    }
  },
  actions: {
    async readMeshData(context, payload) {
      if (payload !== null) {
        return await json('./data/' + payload, () => {}).then(response => {
          context.commit('setMeshData', response)
          return response
        })
      }
    }
  }
})
