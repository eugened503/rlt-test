<template>
  <div class="bottom-frame">
    <div class="skeleton skeleton-animation"></div>
    <button class="close-button"></button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.bottom-frame {
  position: relative;
  padding: 18px;
  margin: 24px 0 0;
  background-color: $clr-signal-black;
  border: 1px solid $clr-tarpaulin-grey;
  border-radius: 12px;

  .skeleton {
    width: calc(699 / 785 * 100%);
    border-radius: 12px;
    height: 36px;
  }
  .close-button {
    position: absolute;
    top: 14px;
    right: 14px;
  }
}
</style>
