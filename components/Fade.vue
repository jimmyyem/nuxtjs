<template>
  <transition
      v-show="localValue"
      name="masked"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
  >
    <div>Loading...</div>
  </transition>
</template>

<script>
import 'animate.css/animate.css'

export default {
  props: {
    value: { type: Boolean, default: false }
  },
  data() {
    return {
      localValue: this.value
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.animate__animated.animate__fadeIn,
.animate__animated.animate__fadeOut {
  --animate-duration: 0.3s;
}
.masked {
  z-index: 10;
}
</style>
