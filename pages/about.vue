<template>
  <el-container>
    <el-header>
      <Menu/>
    </el-header>
    <el-main>
      <div>
        Redis UI is a very functional handy database GUI and works in your pocket on the responsive web or as a desktop
        app v2021.10.106
      </div>
    </el-main>
  </el-container>
</template>

<script>
import Menu from '~/components/Menu'

export default {
  name: 'About',
  components: {
    Menu
  },
  data() {
    return {}
  },
  watch: {},
  beforeDestroy() {
  },
  beforeMount() {
  },
  mounted() {

  },
  methods: {},
  head() {
    return {
      title: '介绍'
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
