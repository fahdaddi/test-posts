<template>
  <div class="w-full h-full flex justify-center items-center">
    <div
      class="mx-2 md:mx-0 bg-background-100 rounded w-full md:w-1/2 lg:w-1/4 flex flex-col px-1 py-2 shadow-lg z-10"
    >
      <label for="form" class="text-center text-xl text-primary">Login</label>
      <input
        v-model="email"
        type="email"
        class="outline-none h-10 border rounded my-2 mx-3 px-2 text-primary"
        placeholder="Email"
      />
      <input
        v-model="first_name"
        type="text"
        class="outline-none h-10 border rounded my-2 mx-3 px-2 text-primary"
        placeholder="Prénom"
      />
      <input
        v-model="last_name"
        type="text"
        class="outline-none h-10 border rounded my-2 mx-3 px-2 text-primary"
        placeholder="Nom"
      />
      <input
        v-model="password"
        type="password"
        class="outline-none h-10 border rounded my-2 mx-3 px-2 text-primary"
        placeholder="Password"
      />
      <button-component
        class="my-2 mx-3"
        type="primary"
        @click="login"
        :loading="loading"
        >Login</button-component
      >
    </div>
  </div>
</template>

<script>
export default {
  middleware: "is_guest",
  data() {
    return {
      loading: false,
      email: "",
      password: "",
      first_name: "",
      last_name: ""
    };
  },
  methods: {
    async login() {
      this.loading = true;
      let data = {
        email: this.email,
        password: this.password,
        first_name: this.first_name,
        last_name: this.last_name,
        last_name: this.last_nam
      };
      setTimeout(() => {
        this.$cookie.set("token-test", JSON.stringify(data), "2d");
        this.$store.commit('user/LOG_IN', data);
        this.loading = false;
        this.$router.push( this.$route.query.callback || '/');
      }, 5 * 1000);
    }
  }
};
</script>

<style></style>
