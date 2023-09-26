<template>
  <draggable
    class="inventory"
    v-model="getInventory"
    handle=".inventory__item:not(.empty)"
    item-key="id"
    :move="handleMove"
    @end="handleDragEnd"
  >
    <template #item="{ element: item }">
      <div
        class="inventory__item"
        :class="{ empty: !item.presence }"
        :key="item.id"
        @click="handleItem(item)"
      >
        <img v-if="item.imageName" :src="`/images/${item.imageName}.png`" alt="image" />
        <p class="inventory__sum" v-if="typeof item.sum === 'number'">{{ item.sum }}</p>
      </div>
    </template>
  </draggable>
</template>

<script setup>
import draggable from 'vuedraggable'
import { useStoreInventory } from '../stores/storeInventory'
import { storeToRefs } from 'pinia'

const { handleDragEnd, handleMove, handleItem } = useStoreInventory()
const { getInventory } = storeToRefs(useStoreInventory())
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
