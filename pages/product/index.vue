<template>
  <div>
    <el-tooltip
      class="item"
      effect="dark"
      placement="bottom-start"
      content="同一个商品的不同规格之间切换，只修改规格对应的内容，页面其他部分不改变"
    >
      <el-icon class="el-icon-info"></el-icon>
    </el-tooltip>
    <el-row>
      <el-button plain @click="setSku('001')">001</el-button>
      <el-button plain @click="setSku('002')">002</el-button>
      <el-button plain @click="setSku('003')">003</el-button>
      <el-button plain @click="setSku('004')">004</el-button>
    </el-row>

    <span>当前选中sku: {{ sku }}</span>
  </div>
</template>

<script>
import Menu from '~/components/Menu'

export default {
  name: 'About',
  components: {
    Menu
  },
  data() {
    return {
      sku: '001'
    }
  },
  watch: {
    $route(oldVal, newVal) {
      console.log(oldVal, newVal)
      this.sku = this.$route.query.sku
    }
  },
  beforeDestroy() {},
  beforeMount() {},
  mounted() {
    console.log('页面刷新', new Date().getTime())
  },
  methods: {
    setSku(sku) {
      const query = JSON.parse(JSON.stringify(this.$route.query))
      query.sku = sku
      this.$router.push({ path: this.$route.path, query })
    }
  },
  head() {
    return {
      title: '介绍'
    }
  }
}
</script>
