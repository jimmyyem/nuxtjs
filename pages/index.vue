<template>
  <div>
    Redis UI is a project built in Nuxt.js where is a vue framework.
    {{ data.code }} {{ data.msg }}

    <img src="~assets/i/banner.png"/>

  </div>
</template>

<script>

export default {
  name: 'Index',
  components: {
  },
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
    this.init()

    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => {
        this.$nuxt.$loading.finish()
      }, 500)
    })
  },
  methods: {
    async init() {
      try {
        const data = await this.$axios.$get('/db.json')
        this.data = data
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    }
  },
  head() {
    return {
      title: '首页'
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
