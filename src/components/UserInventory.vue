<template>
  <draggable
    class="inventory"
    v-model="items"
    handle=".inventory__item:not(.empty)"
    item-key="id"
    :move="handleMove"
    @end="handleDragEnd"
  >
    <template #item="{ element: item }">
      <div class="inventory__item" :class="{ empty: !item.presence }" :key="item.id">
        <img v-if="item.imageName" :src="`/images/${item.imageName}.png`" />
        <p class="inventory__sum" v-if="item.sum">{{ item.sum }}</p>
      </div>
    </template>
  </draggable>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import draggable from 'vuedraggable'
import inventory from '@/data/inventory.json'

const items = ref(inventory)

const futureItem = ref(null)
const movingItem = ref(null)
const isFutureIndex = ref(null)
const movingIndex = ref(null)

function handleDragEnd() {
  futureItem.value = items.value[isFutureIndex.value]
  movingItem.value = items.value[movingIndex.value]
  const itemsCopy = Object.assign([], items.value)
  itemsCopy[isFutureIndex.value] = movingItem.value
  itemsCopy[movingIndex.value] = futureItem.value

  items.value = itemsCopy
}

function handleMove(e) {
  const { index, futureIndex } = e.draggedContext
  movingIndex.value = index
  isFutureIndex.value = futureIndex
  return false
}

onMounted(() => {
  if (localStorage.items) {
    items.value = JSON.parse(localStorage.items)
  }
})

watch(items, (newItems) => {
  localStorage.items = JSON.stringify(newItems)
})
</script>

<style lang="scss" scoped>
.inventory {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;

  &__item {
    width: 20%;
    min-height: 20%;
    border: 1px solid #4c4c4c;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;

    &:first-child {
      border-top-left-radius: 12px;
    }

    &:nth-child(5) {
      border-top-right-radius: 12px;
    }

    &:nth-child(21) {
      border-bottom-left-radius: 12px;
    }

    &:nth-child(25) {
      border-bottom-right-radius: 12px;
    }

    &.empty {
      cursor: auto;
    }
  }

  &__sum {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 16px;
    height: 16px;
    font-family: Inter;
    font-size: 10px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: center;
    color: #7d7d7d;
    border-width: 1px 1px 0 1px;
    border-style: solid;
    border-color: #4c4c4c;
    border-top-left-radius: 6px;
  }
}
</style>
