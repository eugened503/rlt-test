<template>
  <div class="inventory-wrapper">
    <div class="inventory-wrapper__body">
      <LeftFrame></LeftFrame>
      <UserInventory></UserInventory>
    </div>
    <BottomFrame></BottomFrame>
    <ModalWindow v-if="getCurrentItem"></ModalWindow>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import UserInventory from '@/components/UserInventory.vue'
import LeftFrame from '@/components/LeftFrame.vue'
import BottomFrame from '@/components/BottomFrame.vue'
import ModalWindow from '@/components/ModalWindow.vue'
import { useStoreInventory } from '@/stores/storeInventory'
import { storeToRefs } from 'pinia'

const { getCurrentItem } = storeToRefs(useStoreInventory())
const { deleteCurrentItem } = useStoreInventory()

onMounted(() => {
  deleteCurrentItem()
})
</script>

<style lang="scss" scoped>
.inventory-wrapper {
  position: relative;
  padding: 32px;
  background-color: $clr-black;
  width: 849px;
  overflow: hidden;

  &__body {
    display: flex;
    gap: 24px;
  }
}
</style>
