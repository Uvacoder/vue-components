<template>
  <v-github-button
    class="github-stars"
    data-show-count="true"
    data-icon="octicon-star"
    :href="pkg.repository.url"
    :aria-label="`Star ${pkg.author}/${pkg.name} on GitHub`"
  >Star</v-github-button>
</template>

<script>
import VGithubButton from 'vue-github-button'

export default {
  props: {
    pkg: {
      type: Object,
      required: true
    }
  },
  components: {
    VGithubButton
  }
}
</script>

<style lang="scss" scoped>
.github-stars {
  font-size: 0;
}
</style>
