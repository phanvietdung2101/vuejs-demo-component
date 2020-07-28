<template>
  <div id="test">
    <input v-model.lazy="selected">
    <span> {{ selected }} </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: '50k',
      options: [
        { text: 'Đọt bí xào tỏi', value: '50k' },
        { text: 'Canh bông điên điển', value: '30k' },
        { text: 'Lẩu nấm', value: '45k' }
      ]
    }
  },
  updated () {
    console.log(this.selected);
  },
}
</script>

<style>

</style>