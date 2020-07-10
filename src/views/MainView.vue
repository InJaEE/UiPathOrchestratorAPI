<template>
  <section>
      <router-link to="/robot">로봇 목록</router-link>
      <router-link to="/process">프로세스 목록</router-link>
      <router-link to="/libraries">라이브러리 목록</router-link>
      <router-link to="/releaseProcess">작업 목록</router-link>
      <router-link to="/log">로그</router-link>
      <router-link to="/user">유저 목록</router-link>
  </section>
</template>

<script>
export default {
  
}
</script>

<style scoped>
section {
    display: flex;
    justify-content: space-around;
    flex-flow: wrap;
}
a {
  margin: 10px 20px;
}
</style>