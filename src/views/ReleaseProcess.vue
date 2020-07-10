<template>
  <div>
      <h1>Release Process</h1>
      <div v-for="item in releaseProcess" :key="item.key">
          {{item.ProcessKey}}
          <button @click="startJob(item.Key, [2])">Start Job</button>
          <br><br>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            releaseProcess: ''
        }
    },
    methods: {
        startJob(releaseKey, robotId){
            this.$store.dispatch('startJob', { releaseKey, robotId });
        }
    },
    async created(){
        const result  = await this.$store.dispatch('getReleaseProcess');
        this.releaseProcess = result.value;
    }
}
</script>

<style>

</style>