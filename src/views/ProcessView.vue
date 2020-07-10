<template>
  <div>
      <h1>프로세스 목록</h1>
      <div v-for="item in process" :key="item.Id">
          {{item.Id}}, {{item.Description}}
      </div>

  </div>
</template>

<script>
export default {
    data() {
        return {
            process: '',
        }
    },
    async created(){
        console.log("#");
        const result = await this.$store.dispatch('getProcesses');
        this.process = result.value;
        console.log(this.process);
    }
}
</script>

<style>

</style>