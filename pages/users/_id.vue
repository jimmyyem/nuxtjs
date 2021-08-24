<template>
  <div>
    Redis UI is a project built in Nuxt.js where is a vue framework.
    {{ data.code }} {{ data.msg }}


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
  watch: {},
  beforeDestroy() {
  },
  beforeMount() {
  },
  mounted() {
    console.log(this.$route.params.id)  // the user's id is this.$route.params.id
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
