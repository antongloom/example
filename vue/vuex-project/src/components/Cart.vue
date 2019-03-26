<template>
  <div>
    {{ cnt }}
  </div>
</template>

<script>


export default {
  components: {
    
  },
  computed: {
    cnt(){
      return this.$store.state.cnt
    }
  }
}
</script>

<style>

</style>
