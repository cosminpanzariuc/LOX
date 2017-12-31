<template>
  <div>

    <app-header :title="title" @changeTitle="updateTitle($event)"></app-header>
    <app-ninjas :ninjas="ninjasArr"></app-ninjas>
    <app-footer :title="title"></app-footer>

    <form-helper>
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Information about the form</p>
      </div>

      <div slot="form-fields">
        <input type="text" placeholder="Username" required ref="username">
        <input type="password" placeholder="Password" required ref="password">
      </div>

      <div slot="form-controls">
        <button @click.prevent="readRefs">Submit</button>
      </div>
    </form-helper>
  </div>

</template>

<script type="text/babel">
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Ninjas from './components/Ninjas.vue';
  import formHelper from './components/formHelper.vue';

  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer,
      'app-ninjas': Ninjas,
      'form-helper': formHelper
    },
    data(){
      return {
        ninjasArr: [
          {name: 'Ryu', speciality: 'Vue Components', show: false},
          {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
          {name: 'Hitoshi', speciality: 'Click Events', show: false},
          {name: 'Tango', speciality: 'Conditionals', show: false},
          {name: 'Kami', speciality: 'Webpack', show: false},
          {name: 'Yoshi', speciality: 'Data Diggin', show: false}
        ],
        title: 'Vue Ninjas'
      }
    },

    methods: {
      updateTitle(updatedTitle){
        this.title = updatedTitle;

      },
      readRefs(e){
        console.log(this.$refs.username.value, this.$refs.password.value);
      }
    }
  }
</script>

<style>

</style>
