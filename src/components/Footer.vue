<template>
  <footer class="footer">
    <Container>
      <div class="credit">
        Made with <Heart /> by
        <a href="https://github.com/adi518">Adi Sahar</a>
      </div>
    </Container>
  </footer>
</template>

<script>
import Heart from '@/components/Heart'
import Container from '@/components/Container'

export default {
  props: {
    pkg: {
      type: Object,
      required: true
    }
  },
  components: {
    Heart,
    Container
  }
}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 2rem;
  padding-top: 2rem;
  min-height: 20rem;
  background-color: #0c1121;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.credit {
  color: #8b9dc3;
}
</style>
