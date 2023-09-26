<template>
  <div class="inventory-wrapper">
    <div class="inventory-wrapper__body">
      <LeftFrame></LeftFrame>
      <UserInventory></UserInventory>
    </div>
    <BottomFrame></BottomFrame>
  </div>
</template>

<script setup>
import UserInventory from '@/components/UserInventory.vue'
import LeftFrame from '@/components/LeftFrame.vue'
import BottomFrame from '@/components/BottomFrame.vue'
</script>

<style lang="scss" scoped>
.inventory-wrapper {
  padding: 32px;
  background-color: rgba(29, 29, 29, 1);
  width: 849px;

  &__body {
    display: flex;
    gap: 24px;
  }
}
</style>
