<template>
  <button v-on:click="count++">Bạn đã bấm {{ count }} lần.</button>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
}
</script>

<style>

</style>