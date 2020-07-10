<template>
  <div>
      <h1>Libraries</h1>
      <div v-for="item in libraries" :key="item.Id">
          {{item.Title}}
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            libraries: '',
        }
    },
    async created(){
        const result = await this.$store.dispatch('getLibraries');
        this.libraries = result.value;
        console.log(result.value);
    }
}
</script>

<style>

</style>