<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form Two - Log In</h3>
        <p>Enter your details to log-in</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="Username" required ref="username" />
        <input type="password" placeholder="Password" required ref="password" />
      </div>
      <div slot="form-controls">
        <button @click.prevent="readRefs">Login</button>
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
