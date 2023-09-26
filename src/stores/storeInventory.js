import { defineStore } from 'pinia'
import inventory from '@/data/inventory.json'

export const useStoreInventory = defineStore('storeInventory', {
  state: () => {
    return {
      inventory: JSON.parse(JSON.stringify(inventory)),
      futureItem: null,
      movingItem: null,
      futureIndex: null,
      movingIndex: null,
      currentItem: null
    }
  },
  actions: {
    handleDragEnd() {
      this.futureItem = this.inventory[this.futureIndex]
      this.movingItem = this.inventory[this.movingIndex]
      const itemsCopy = Object.assign([], this.inventory)
      itemsCopy[this.futureIndex] = this.movingItem
      itemsCopy[this.movingIndex] = this.futureItem
      this.inventory = itemsCopy
    },

    handleMove(e) {
      const { index, futureIndex } = e.draggedContext
      this.movingIndex = index
      this.futureIndex = futureIndex
      return false
    },

    handleItem(item) {
      this.currentItem = item
    },

    deleteItems(num) {
      const newSum = this.currentItem.sum - num
      this.currentItem.sum = newSum < 0 ? 0 : newSum
      this.deleteCurrentItem()
    },

    deleteCurrentItem() {
      this.currentItem = null
    },

    clearStore() {
      this.inventory = null
    }
  },
  getters: {
    getInventory: (state) => {
      return state.inventory
    },
    getCurrentItem: (state) => {
      return state.currentItem
    }
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: 'storeInventory',
        storage: localStorage
      }
    ]
  }
})
