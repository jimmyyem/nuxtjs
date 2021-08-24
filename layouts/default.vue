<template>
  <div class="zy__center">
    <Menu />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Menu from '~/components/Menu'
import Footer from '~/components/Footer'

export default {
  name: 'Index',
  components: {
    Menu,
    Footer
  },
}
</script>

<style lang="scss" scoped>
.nothing {
  background: #fff;
}
.body {
  background: #f2f2f2;
}
.zy__center {
  background: #fff;
  width: 100%;
  height: 100%;
}
// 横屏适配
// @media screen and (min-width: 820px) and (max-width: 1920px) {
@media screen and (orientation: landscape) {
  /* prettier-ignore */
  .zy__center {
    width: 720Px;
    margin: 0 auto;
  }
}
// 高分辨率设备（步步高预装 2176x1600）可以设置更大的宽度
@media screen and (orientation: landscape) and (min-width: 1200px) and (-webkit-min-device-pixel-ratio: 1.5) {
  /* prettier-ignore */
  .zy__center {
    width: 960Px;
    margin: 0 auto;
  }
}
</style>
