<template>
  <div class="rounded-full transition-rotate-infinite min-w-4 min-h-4" :style="style">

  </div>
</template>

<script>
export default {
    props:{
        color: {
            type: String,
        },
        stroke: {
            type: String,
            validator: (prop)=>{
                return ['bold','light','medium','normal'].indexOf(prop) > -1;
            },
            default: 'medium'
        }
    },
    computed:{
        loaderColor(){
            if(!this.color) return '#123c69';
            switch (this.color) {
                case 'primary':
                    return '#123c69';
                    break;
                case 'blue':
                    return '#ac3b61';
                    break;
                default:
                    return this.color;
                    break;
            }
        },
        strokeWidth(){
            switch (this.stroke) {
                case 'bold':
                    return "4px"
                    break;
                case 'light':
                    return "1px"
                    break;
                case 'medium':
                    return "2px"
                    break;
                default:
                    return "3px"
                    break;
            }
        },
        style(){
            return `border-top: ${this.strokeWidth} solid ${this.loaderColor}; border-right: ${this.strokeWidth} solid #FDFCFC00; border-bottom: ${this.strokeWidth} solid ${this.loaderColor}; border-left: ${this.strokeWidth} solid #FDFCFC00;`
        }
    }
}
</script>

<style>

</style>