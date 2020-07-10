<template>
  <div>
      <h1>User</h1>
      <div v-for="item in users" :key="item.Id">
          {{item.UserName}}
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            users: '',
        }
    },
    async created(){
        const result = await this.$store.dispatch('getUser');
        this.users = result.value;
    }
}
</script>

<style>

</style>