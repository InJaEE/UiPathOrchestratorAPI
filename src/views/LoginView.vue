<template>
  <section>
      <div>
        <div class="boxName">
          <label for="tenant">테넌트</label>
        </div>
        <input id="tenant" class="inputBox" type="text" value="default" v-model="tenant">
      </div>
      <div>
        <div class="boxName">
          <label for="id">아이디</label>
        </div>
        <input id="id" class="inputBox" type="text" v-model="id">
      </div>
      <div>
        <div class="boxName">
          <label for="password">비밀번호</label>
        </div>
        <input id="password" class="inputBox" type="password" v-model="password">
      </div>
      <button class="loginButton" @click="pressLoginButton">로그인</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tenant: 'default',
      id: 'admin',
      password: '1234qwer',
    }
  },
  methods: {
    async pressLoginButton(){
      const userData = {
        tenancyName: this.tenant,
        usernameOrEmailAddress: this.id,
        password: this.password,
      }
      const result = await this.$store.dispatch('login', userData);
      if(result){
        this.$router.push('/main');
      }
    }
  }
}
</script>

<style scoped>
section {
  text-align: center;
}
.boxName {
  font-size: 12px;
}
.inputBox {
  border: 5px #FA4616 solid;
  outline: none;
  padding: 10px;
  margin: 5px;
}
.loginButton {
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #FA4616;
  color: white;
  font-size: 24px;
  font-weight: 600;
  padding: 10px 30px;
  margin: 10px;
  border-radius: 10%;
  box-shadow: 5px 5px 5px #fa4616;
}
</style>