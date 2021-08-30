<template>
  <div>
    Redis UI is a project built in Nuxt.js where is a vue framework.
    {{ $route.params.id }}


  </div>
</template>

<script>

export default {
  name: 'NewsId',
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
  // 用于校验动态路由参数的合法性
  validate({params}) {
    console.log(params)
    return /^\d+$/.test(params.id)
  },
  watch: {},
  beforeDestroy() {
  },
  beforeMount() {
  },
  mounted() {
    console.log(this.$route.params.id)  // the news's id is this.$route.params.id
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
