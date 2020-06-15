<template>
  <div
    class="w-full h-full flex flex-col justify-start items-center px-10 py-10"
    v-if="post && user"
  >
    <div class="w-full flex flex-col items-start pb-4">
      <nuxt-link tag="a" :to="`/users/${user.id}`" class="flex items-center">
        <p class="text-primary text-xl font-bold">{{ user.name }}</p>
        <span class="text-gray-500 text-light ml-2">@{{ user.username }}</span>
      </nuxt-link>
    </div>
    <div class="w-full rounded shadow p-4">
      <p class="text-xl text-primary opacity-75">{{ post.title }}</p>
      <p class="font-light text-sm">{{ post.body }}</p>
    </div>
  </div>
  <div class="w-full flex flex-col justify-center items-center" v-else>
    <empty-block
      v-if="!posts.length"
      message="Aucun post trouvé avec cet Id!"
    />
  </div>
</template>

<script>
export default {
  middleware: "is_auth",
  async asyncData({ app, route }) {
    let endpoint = `/posts/${route.params.post_id}`;
    try {
      let { data } = await app.$axios.get(endpoint);

      if (!data.userId) {
        return {
          post: null
        };
      }

      let userData = await app.$axios.get(`/users/${data.userId}`);
      return {
        post: data,
        user: userData.data
      };
      return {
        posts: data
      };
    } catch (error) {}
  },
  data() {
    return {
      post: null,
      user: null
    };
  },
  head() {
    return {
      title: this.post ? this.post.title : "post non trouvé!",
      meta: [
        // hid est utilisé comme identifiant unique. N'utilisez pas `vmid` car ça ne fonctionnera pas
        {
          hid: "description",
          name: "description",
          content: this.post ? this.post.body : "post non trouvé!"
        }
      ]
    };
  }
};
</script>

<style></style>
