<template>
  <ScrollToTopScope>
    <div
      slot-scope="scope"
      class="scroll-to-top"
      @click="scope.scrollToTop"
      :class="{ 'is-visible': scope.isScrollEnd }"
    >
      👆
    </div>
  </ScrollToTopScope>
</template>

<script>
import ScrollToTopScope from './ScrollToTopScope'

export default {
  components: { ScrollToTopScope },
}
</script>

<style lang="scss" scoped>
.scroll-to-top {
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: 1;
  margin: 1rem;
  cursor: default;
  position: fixed;
  color: #8b9dc3;
  line-height: normal;
  border-radius: 0.25rem;
  padding-top: 0.1rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-bottom: 0.15rem;
  background-color: lighten(#0c1121, 20%);
  transition: color var(--common-transition-time),
    padding var(--common-transition-time), opacity var(--common-transition-time);

  &:hover {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  &.is-visible {
    opacity: 1;
  }
}
</style>
