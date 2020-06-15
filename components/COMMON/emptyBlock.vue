<template>
  <div class="w-full flex flex-col items-center justify-center h-40 opacity-50">
      <div class="p-2 rounded-full bg-gray-100 flex justify-center items-center">
        <svg-icon :icon="icon" :iconStyle="iconStyle" />
      </div>
      <p :class="messageStyle">{{message}}</p>
  </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'tray-empty'
        },
        message: {
            type: String,
            default: 'No element found!'
        },
        iconStyle: {
            type: String,
            default: 'w-8 h-8 text-primary'
        },
        messageStyle: {
            type: String,
            default: 'text-primary'
        }
    }
}
</script>

<style>

</style>