<template>
  <div>
    <div>Count: {{ cnt }}</div>
    <div>Total: {{ total }}</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  components: {
    
  },
  computed: mapGetters([
      'cnt',
      'total'
    ])
  /*computed: {
    cnt(){
      return this.$store.getters.cnt
    }
  }*/
}
</script>

<style>

</style>
