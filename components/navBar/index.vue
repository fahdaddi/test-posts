<template>
    <header class="w-full fixed h-12 md:h-16 bg-background-100 shadow top-0 flex items-center px-10 justify-center md:justify-between z-50">
            <router-link to="/" class="w-16 h-12 flex justify-center items-center">
                <img src="https://ci3.googleusercontent.com/proxy/QZhOaIHQB2ImJXmTEt8IE9qhkXzwD2FqNrDSrbT3sW2VfRLhbKnqEjlsikuFdnCmU6xAtYo0-YuKQuE=s0-d-e1-ft#https://www.nutriweb.mc/img/nutriweb.png" alt="" srcset="">
            </router-link>

            <div class="hidden md:flex item-end text-primary text-md lg:text-md items-center">
                <div v-if="isAuth" class="h-10 w-10 flex justify-center items-center shadow-sm rounded-full overflow-hidden cursor-pointer">
                    <img src="~/assets/images/default-avatar.png">
                </div>
                <div v-if="isAuth" class="ml-2" @click="logout">
                    <svg-icon icon="sign-out" iconStyle="text-primary hover:text-red-700 w-6 cursor-pointer"/>
                </div>
            </div>
    </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            isAuth: "user/IS_AUTH"
        })
    },
    methods: {
        logout(){
            this.$cookies.remove('token-test');
            this.$store.commit('user/LOG_OUT');
        }
    }
}
</script>

<style scoped>
    .element{
        transition: all .4s ease-in-out;
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
    .router-link-active{
        @apply opacity-100 text-primary;
    }
</style>