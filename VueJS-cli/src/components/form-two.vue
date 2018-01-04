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
        <div id="checkboxes">
          <label>Ninjas</label>
          <input type="checkbox" value="ninjas" v-model="blog.categories">
          <label>Wizards</label>
          <input type="checkbox" value="wizards" v-model="blog.categories">
          <label>Mario</label>
          <input type="checkbox" value="mario" v-model="blog.categories">
          <label>Cheese</label>
          <input type="checkbox" value="cheese" v-model="blog.categories">
        </div>
        <p></p>
        <label>Author</label>
        <select v-model="blog.author">
          <option v-for="author in authors">{{author}}</option>
        </select>
        


      </div>
      <div slot="form-controls">
        <button @click.prevent="readRefs">Login</button>
        <span>{{blog.username}} - </span>
        <span>{{blog.password}}</span>
        <p>Blog Categories:</p>
        <ul>
          <li v-for="category in blog.categories">{{category}}</li>
        </ul>
        <p>Author: {{blog.author}}</p>
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
    data() {
      return {
        blog:{
          username: "",
          password: "",
          categories: [],
          author: ""
        },
          authors:['The Net Ninja', 'The Angular Avenger', 'The Vue Vindecator']
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

  #checkboxes input{
    margin-right:15px;
  }

</style>
