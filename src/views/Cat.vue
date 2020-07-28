<template>
  <b-table striped hover :items="cats"></b-table>
</template>

<script>
import cats from '@/data/cats'

export default {
  data() {
    return {
      cats
    }
  },
}
</script>
