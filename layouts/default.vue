<template>
  <div class="h-screen w-screen overflow-hidden bg-white-100 font-body">
    <NavBar />
    <div class="h-full w-full absolute top-0 py-12 md:py-0 md:pt-16">
      <nuxt class="overflow-y-auto" />
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import NavBar from "~/components/navBar/index";
import Footer from "~/components/footer";
export default {
  data() {
    return {};
  },
  components: {
    NavBar,
    Footer
  },
};
</script>

<style></style>
