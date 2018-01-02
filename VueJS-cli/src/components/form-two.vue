<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form Two - Log In</h3>
        <p>Enter your details to log-in</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="Username" required ref="username" v-model="blog.username"/>
        <input type="password" placeholder="Password" required ref="password" v-model="blog.password"/>
      </div>
      <div slot="form-controls">
        <button @click.prevent="readRefs">Login</button>
        <span>{{blog.username}} - </span>
        <span>{{blog.password}}</span>
      </div>
    </form-helper>
  </div>
</template>

<script>
  import formHelper from './formHelper.vue';
  export default {
    components: {
      'form-helper': formHelper
    },
    data () {
      return {
        blog:{
          username: "",
          password: ""
        }
      }
    },
    methods: {
      readRefs(e){
        alert(this.$refs.username.value + ' - ' + this.$refs.password.value);
      }
    }
  }
</script>

<style>
  body{
    margin: 0;
    font-family: 'Nunito SemiBold';
  }
</style>
