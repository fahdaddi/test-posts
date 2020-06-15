<template>
  <button
    @click="click"
    @mousedown="mousedown"
    @mouseenter="mouseenter"
    @mouseout="mouseout"
    :disabled="isDisabled"
    :class="[bgColorClass, textColorClass, borderClass]"
  >
    <Loader v-if="loading" class="w-6 h-6" :color="loaderColor" />
    <slot v-else />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default",
      validator: obj => {
        return true;
      }
    },
    customClass: {
      type: String,
      default: "",
      validator: obj => {
        return true;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isDisabled() {
      return this.disabled || this.loading;
    },
    bgColorClass() {
      if (!this.isDisabled) {
        switch (this.type) {
          case "primary":
            return "bg-primary hover:bg-white-100";
            break;

          default:
            return "bg-white-100 hover:bg-primary";
            break;
        }
      }
      else{
        switch (this.type) {
          case "primary":
            return "bg-primary";
            break;
  
          default:
            return "bg-white-100";
            break;
        }
      }
    },
    textColorClass() {
      if (!this.isDisabled) {
        switch (this.type) {
          case "primary":
            return "text-white-100 hover:text-primary";
            break;

          default:
            return "text-primary hover:text-white-100";
            break;
        }
      }
      switch (this.type) {
        case "primary":
          return "text-white-100";
          break;

        default:
          return "text-primary";
          break;
      }
    },
    loaderColor() {
      switch (this.type) {
        case "primary":
          return "white";
          break;
        default:
          return "blue";
          break;
      }
    },
    borderClass() {
      switch (this.type) {
        case "primary":
          return "border border-primary";
        default:
          return "";
          break;
      }
    }
  },
  methods: {
    click($event) {
      this.$emit("click", $event);
    },
    mousedown($event) {
      this.$emit("mousedown", $event);
    },
    mouseenter($event) {
      this.$emit("mouseenter", $event);
    },
    mouseout($event) {
      this.$emit("mouseout", $event);
    }
  }
};
</script>

<style></style>
