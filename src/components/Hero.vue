<template>
  <div
    class="hero animated fadeIn"
    :class="breakpoint.noMatch && ['pl-3', 'pr-3']"
  >
    <slot></slot>
    <v-breakpoint v-model="breakpoint"></v-breakpoint>
  </div>
</template>

<script>
import VBreakpoint from 'vue-breakpoint-component'

export default {
  components: { VBreakpoint },
  data: () => ({ breakpoint: {} }),
}
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column; // Fix IE
  justify-content: center;
  height: 100vh;
  min-height: 568px; // iPhone 5 height
  padding-top: 6rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 6rem;
  background: rgb(13, 18, 35);
  background: linear-gradient(
    180deg,
    rgba(13, 18, 35, 1) 50%,
    rgba(39, 55, 105, 1) 75%,
    rgba(13, 18, 35, 1) 100%
  );
}
</style>
