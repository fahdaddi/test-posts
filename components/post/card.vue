<template>
    <router-link :to="`/post/${item.id}`" tag="div">
        <div class="w-48 bg-white-100 rounded shadow mx-2 my-2 border-white-500 p-4 flex flex-col justify-between items-center cursor-pointer active:bg-black">
            <div class="h-12 w-full py-2 bottom-0 flex items-start overflow-hidden">
                <p class="text-md text-blue font-bold">{{item.title.length > 15 ? `${item.title.substr(0,15)}...` : item.title}}</p>
            </div>
            <div class="flex flex-col items-start w-full flex-grow">
                <div class="h-40 overflow-hidden">
                <p class="text-xs">{{item.body}}</p>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props:{
        item: {
            type: Object,
            required: true,
            validator:(obj)=>{
                return obj.id && obj.title && obj.body;
            }
        }
    }
}
</script>

<style>

</style>