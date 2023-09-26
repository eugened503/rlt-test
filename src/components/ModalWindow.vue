<template>
  <div class="modal">
    <div class="modal__inner">
      <button class="close-button" @click="deleteCurrentItem"></button>
      <img :src="`/images/${getCurrentItem.imageName}.png`" alt="image" />
      <div class="skeletons">
        <div class="skeletons__head skeleton-animation"></div>
        <div class="skeletons__body">
          <div class="skeletons__item skeleton-animation"></div>
          <div class="skeletons__item skeleton-animation"></div>
          <div class="skeletons__item skeleton-animation"></div>
          <div class="skeletons__item skeleton-animation"></div>
          <div class="skeletons__item skeleton-animation"></div>
        </div>
      </div>
      <button @click="isDelete = !isDelete" class="main-button">Удалить предмет</button>
      <div v-if="isDelete" class="enter-data">
        <input v-model="num" type="number" placeholder="Введите количество" />
        <div class="enter-data__buttons">
          <button class="main-button" @click="deleteCurrentItem">Отмена</button>
          <button class="main-button" @click="deleteItems(num)">Подтвердить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStoreInventory } from '@/stores/storeInventory'
import { storeToRefs } from 'pinia'

const { deleteCurrentItem, deleteItems } = useStoreInventory()
const { getCurrentItem } = storeToRefs(useStoreInventory())

const isDelete = ref(false)
const num = ref(null)
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 32px;
  right: 0;
  width: 250px;
  min-height: 500px;
  padding: 15px 15px 18px;
  background-color: $clr-signal-black;
  border: 1px solid $clr-tarpaulin-grey;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  animation: showRight 2s;

  &__inner {
    position: relative;
  }

  .close-button {
    margin: 0 0 0 auto;
  }

  img {
    display: block;
    width: 130px;
    min-height: 130px;
    margin: 23px auto 0;
  }

  .skeletons {
    margin: 30px 0 0;
    padding: 16px 0 24px;
    border-top: 1px solid $clr-tarpaulin-grey;
    border-bottom: 1px solid $clr-tarpaulin-grey;

    &__item {
      height: 10px;
      border-radius: 4px;
      width: 100%;
    }

    &__head {
      width: 100%;
      height: 30px;
      border-radius: 8px;
    }

    &__body {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      margin: 24px 0 0;

      .skeletons__item {
        &:nth-child(4) {
          max-width: 180px;
        }

        &:last-child {
          max-width: 80px;
        }
      }
    }
  }

  .main-button {
    margin: 18px 0 0;
  }

  .enter-data {
    position: absolute;
    bottom: 0;
    border-top: 1px solid $clr-tarpaulin-grey;
    z-index: 1;
    width: 100%;
    background-color: $clr-signal-black;
    padding: 20px 0 0;

    input {
      padding: 12px;
      width: 100%;
      background-color: $clr-signal-black;
      color: $clr-white;
      border: 1px solid $clr-tarpaulin-grey;
      font-family: Inter;
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;
      letter-spacing: 0em;

      &::placeholder {
        font-family: Inter;
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
      }
    }

    &__buttons {
      display: flex;
      gap: 10px;

      .main-button {
        &:first-child {
          max-width: 88px;
          background-color: $clr-white;
          color: rgba(45, 45, 45, 1);
        }
      }
    }
  }
}

@keyframes showRight {
  from {
    right: -50%;
  }

  to {
    right: 0;
  }
}
</style>
