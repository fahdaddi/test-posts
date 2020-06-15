<template>
  <div class="w-full flex flex-col justify-center items-center pt-10 px-10" v-if="user">
    <div class="w-full flex flex-col items-start pb-4">
      <div class="flex items-center">
        <p class="text-primary text-xl font-bold">{{ user.name }}</p>
        <span class="text-gray-500 text-light ml-2">@{{ user.username }}</span>
      </div>
      <div class="flex items-center">
        <svg-icon icon="phone" iconStyle="w-4 text-primary mr-2" />
        <p class="text-gray-700">{{ user.phone }}</p>
      </div>
      <div
        v-if="user.email"
        class="flex items-center cursor-pointer"
        @click="visitWebsite('mailto:' + user.email)"
      >
        <svg-icon icon="at" iconStyle="w-4 text-primary mr-2" />
        <p class="text-gray-700">{{ user.email }}</p>
      </div>
      <div
        v-if="user.website"
        class="flex items-center cursor-pointer"
        @click="visitWebsite('http://' + user.website)"
      >
        <svg-icon icon="web" iconStyle="w-4 text-primary mr-2" />
        <p class="text-gray-700">{{ user.website }}</p>
      </div>
    </div>
    <empty-block
      v-if="!posts.length"
      message="Aucun élément trouvé pour cet utilisateur!"
    />
    <template v-else>
      <div
        class="w-full flex flex-grow flex-wrap justify-center md:justify-between"
        v-if="showPosts"
      >
        <postCard
          v-for="item in showPosts"
          :key="`post_${item.id}`"
          :item="item"
        />
      </div>
      <paginate
        :page-count="pageCount"
        :click-handler="loadPage"
        :prev-text="'Précédente'"
        :next-text="'suivante'"
        :container-class="'className'"
      >
      </paginate>
    </template>
  </div>
  <div class="w-full h-full flex justify-center items-center" v-else>
      <empty-block
      icon="user"
      message="Utilisateur non trouvé!"
    />
  </div>
</template>

<script>
import postCard from "~/components/post/card";
export default {
  middleware: "is_auth",
  async asyncData({ app, route }) {
    let userEndpoint = `/users/${route.params.user_id}`;
    let endpoint = `/posts`;
    try {
      let userResponse = await app.$axios.get(userEndpoint);
      let { data } = await app.$axios.get(endpoint);
      return {
        posts: data.filter(obj => {
          return obj.userId == route.params.user_id;
        }),
        user: userResponse.data
      };
    } catch (error) {}
  },
  data() {
    return {
      posts: [],
      user: null,
      page: 1,
      perPage: 50
    };
  },
  head() {
    return {
      title: this.post ? this.user.name : "utilisateur non trouvé!",
      meta: [
        // hid est utilisé comme identifiant unique. N'utilisez pas `vmid` car ça ne fonctionnera pas
        {
          hid: "description",
          name: "description",
          content: this.post ? this.user.username : "utilisateur non trouvé!"
        }
      ]
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.posts.length / this.perPage);
    },
    showPosts() {
      if (!this.posts.length) return;
      if (this.posts.length < this.perPage) {
        return this.posts;
      }
      let arr = [];
      for (
        let i = 0 + this.perPage * (this.page - 1);
        i < this.perPage * this.page;
        i++
      ) {
        const element = this.posts[i];
        arr.push(element);
      }
      return arr;
    }
  },
  methods: {
    loadPage(pageNum) {
      this.page = pageNum;
    },
    visitWebsite(url) {
      window.open(url, "_blank");
    }
  },
  components: {
    postCard
  }
};
</script>

<style>
.className {
  @apply flex my-8;
}
.className li {
  @apply px-4 py-2 rounded text-primary;
}
.className li a {
  @apply outline-none !important;
}
.className .active {
  @apply bg-primary text-white !important;
}
.className .disabled {
  @apply text-gray-500 cursor-not-allowed !important;
}
</style>
