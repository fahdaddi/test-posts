<template>
  <div></div>
</template>

<script>
export default {};
</script>

<style scoped>
.element {
  transition: all 0.4s ease-in-out;
}
.blink {
  animation: blink-animation 2s steps(5, start) infinite;
  -webkit-animation: blink-animation 2s steps(5, start) infinite;
}
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
@-webkit-keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
.router-link-active {
  @apply opacity-100 text-primary;
}
</style>
