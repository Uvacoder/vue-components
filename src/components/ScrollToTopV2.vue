<template>
  <ScrollToTopScope>
    <div
      slot-scope="scope"
      class="scroll-to-top"
      @click="scope.scrollToTop"
      :class="{ 'is-visible': scope.isScrollEnd }"
    >
      ↑
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
  opacity: 0;
  z-index: 1;
  bottom: 2rem;
  right: 1.5rem;
  position: fixed;
  line-height: normal;
  border-radius: 50%;
  cursor: default;
  font-size: 1.25rem;
  padding: 0.5rem 0.688rem;
  color: var(--color-body);
  transform: translateY(16rem);
  background-color: darken(#2f4480, 2.5%);
  transition: background-color var(--transition-duration) ease-out,
    opacity var(--transition-duration) ease-out,
    transform var(--transition-duration) ease-out;

  &:hover {
    background-color: #5972a9;
  }

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
