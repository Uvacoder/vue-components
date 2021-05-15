<template>
  <nav class="nav" :class="{ 'is-sticky': isSticky }">
    <slot v-bind="{ isSticky }"></slot>
  </nav>
</template>

<script>
import { useWindowScrollPosition } from 'vue-use-web'
import { inject, provide, computed } from '@vue/composition-api'

export const NavSymbol = Symbol()

export const getNavHeight = () =>
  document
    .getElementsByTagName('nav')[0]
    .getBoundingClientRect()
    .height.toFixed(2)

export const VNavProvider = {
  setup() {
    const context = inject(NavSymbol)
    return { context }
  },
  render() {
    return this.$scopedSlots.default?.(this.context)
  },
}

export default {
  setup() {
    const { y: scrollYPosition } = useWindowScrollPosition()
    const isSticky = computed(() => scrollYPosition.value > 0)
    provide(NavSymbol, { isSticky })
    return { isSticky }
  },
}
</script>

<style lang="scss" scoped>
.nav {
  top: 0;
  z-index: 3;
  width: 100%;
  display: flex;
  padding: 1rem;
  position: absolute;
  align-items: center;
  background-color: #0d1223;
  transition: padding var(--transition-duration),
    background-color var(--transition-duration);

  &.is-sticky {
    position: fixed;
    // padding-top: 0.8rem;
    // padding-bottom: 0.8rem;
    background-color: rgba(60, 87, 164, 0.95); // #3c57a4;
  }
}
</style>
