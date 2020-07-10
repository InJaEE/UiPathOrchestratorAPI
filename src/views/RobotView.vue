<template>
  <section>
      <h1>로봇 목록</h1>
      <div v-for="item in robots" :key="item.MachineId">
          {{item.MachineName}}, {{item.Name}}
      </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            robots: ''
        }
    },
    async created(){
        const result = await this.$store.dispatch('getRobots');
        this.robots = result.value;
        console.log(this.robots);
    }
}
</script>

<style>

</style>