<template>
  <div
    class="fill-current"
    :class="iconStyle"
    v-html="require(`!svg-inline-loader?removeSVGTagAttrs=false!~/assets/icons/${icon}.svg`)"
  ></div>
</template>

<style module>
.svg {
	fill: currentColor;
	/* height: 1em; */
	/* margin-top: -4px; */
	vertical-align: middle;
	/* width: 1em; */
}
</style>

<script>
export default {
	props: {
		icon: {
			type: String,
			default: 'activity'
		},
		iconStyle: {
			type: String,
			default: 'w-6 h-6'
		}
	},
	mounted() {
		// this.$el.firstChild.classList.add(this.$style.svg)
		this.$el.firstChild.removeAttribute("height");
		this.$el.firstChild.removeAttribute("width");
	}
};
</script>
