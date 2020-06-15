<template>
  <div
    class="w-full flex flex-col justify-center items-center pt-10"
  >
    <empty-block v-if="!posts.length" message="Aucun élément trouvé!" />
    <template v-else>
      <div class="w-full flex flex-grow flex-wrap justify-center md:justify-between px-10">
        <postCard v-for="item in showPosts" :key="`post_${item.id}`" :item="item" />
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
</template>

<script>
import postCard from "~/components/post/card";
export default {
  middleware: "is_auth",
  async asyncData({ app }) {
    let endpoint = `/posts`;
    try {
      let { data } = await app.$axios.get(endpoint);
      return {
        posts: data
      };
    } catch (error) {}
  },
  data() {
    return {
      posts: [],
      page: 1,
      perPage: 50
    };
  },
  head() {
    return {
      title: "Posts feed",
      meta: [
        // hid est utilisé comme identifiant unique. N'utilisez pas `vmid` car ça ne fonctionnera pas
        {
          hid: "description",
          name: "description",
          content: this.post ? this.post.body : "discover posts"
        }
      ]
    };
  },
  computed: {
    pageCount(){
      return Math.ceil(this.posts.length / this.perPage);
    },
    showPosts() {
      if(!this.posts.length) return;
      let arr = [];
      for (let i = (0 + 50*(this.page - 1)); i < (50*(this.page)); i++) {
        const element = this.posts[i];
        arr.push(element);
      }
      return arr;
    }
  },
  methods: {
    loadPage(pageNum) {
      this.page = pageNum
    }
  },
  components: {
    postCard
  }
};
</script>

<style>
.className{
 @apply flex my-8;
}
.className li {
  @apply px-4 py-2 rounded text-primary;
}
.className li a{
  @apply outline-none !important;
}
.className .active {
  @apply bg-primary text-white !important;
}
.className .disabled {
  @apply text-gray-500 cursor-not-allowed !important;
}
</style>
