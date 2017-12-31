<template>
  <div>

    <app-header :title="title" @changeTitle="updateTitle($event)"></app-header>
    <app-ninjas :ninjas="ninjasArr"></app-ninjas>
    <app-footer :title="title"></app-footer>

    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div style="text-align:center">
      <button @click="currentComponent='form-one'">Show form one</button>
      <button @click="currentComponent='form-two'">Show form two</button>
    </div>
    
  </div>

</template>

<script type="text/babel">
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Ninjas from './components/Ninjas.vue';
  import formHelper from './components/formHelper.vue';
  import formOne from './components/form-one.vue';
  import formTwo from './components/form-two.vue';

  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer,
      'app-ninjas': Ninjas,
      'form-helper': formHelper,
      'form-one': formOne,
      'form-two': formTwo
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
        title: 'Vue Ninjas',
        currentComponent: 'form-one'
      }
    },

    methods: {
      updateTitle(updatedTitle){
        this.title = updatedTitle;
      }
    }
  }
</script>

<style>

</style>
