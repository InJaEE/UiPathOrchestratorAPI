<template>
  <header>
      <img src="../assets/uipath.png" alt="uipath" @click="link">
      <div v-if="isLogin">
        <span>로그인</span>
      </div>
  </header>
</template>

<script>
export default {
    data() {
        return {
            isLogin: false,
        }
    },
    methods: {
        link(){
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px gray solid;
    margin: 20px 0;
    width: 100%;
}
img {
    cursor: pointer;
    margin-bottom: 20px;
}
</style>