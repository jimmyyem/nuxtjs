<template>
  <div class="main">
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/contact">Contact</NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 10px;
  padding: 5px;
}
</style>
