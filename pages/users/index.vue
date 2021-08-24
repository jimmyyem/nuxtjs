<template>
  <div >
    Redis UI is a project built in Nuxt.js where is a vue framework.
    {{ data.code }} {{ data.msg }}

  </div>
</template>

<script>

export default {
  name: 'NewsId',
  components: {},
  data() {
    return {

      data: {
        code: 0,
        msg: ''
      }
    }
  },
  watch: {},
  beforeDestroy() {
  },
  beforeMount() {
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 4500)
      // alert('users/index.vue')
    })
  },
  methods: {

  },
  head() {
    return {
      title: 'single'
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}

</style>
