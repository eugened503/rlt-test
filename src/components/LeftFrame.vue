<template>
  <div class="left-frame">
    <img class="left-frame__image" src="/images/img-blur.png" alt="img-blur" />
    <div class="skeletons">
      <div class="skeletons__head skeleton-animation"></div>
      <div class="skeletons__body">
        <div class="skeletons__item skeleton-animation"></div>
        <div class="skeletons__item skeleton-animation"></div>
        <div class="skeletons__item skeleton-animation"></div>
        <div class="skeletons__item skeleton-animation"></div>
        <div class="skeletons__item skeleton-animation"></div>
      </div>
      <div class="skeletons__item skeletons__footer skeleton-animation"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.left-frame {
  background-color: #262626;
  padding: 18px 14px 24px;
  border-radius: 12px;
  border: 1px solid #4c4c4c;

  &__image {
    display: block;
  }

  .skeletons {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 198px;
    margin: 20px auto 0;

    &__item {
      height: 10px;
      border-radius: 4px;
      width: 100%;
    }

    &__head {
      width: 100%;
      height: 26px;
      border-radius: 8px;
    }

    &__body {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;

      .skeletons__item {
        &:first-child {
          max-width: 155px;
        }

        &:nth-child(3) {
          max-width: 170px;
        }

        &:nth-child(4) {
          max-width: 160px;
        }

        &:last-child {
          max-width: 140px;
        }
      }
    }

    &__footer {
      margin: 0 auto;
      max-width: 80px;
    }
  }
}
</style>
