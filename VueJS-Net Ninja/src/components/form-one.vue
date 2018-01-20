<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form One - Contact Us</h3>
        <p>Fill in this form to contact us</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="Name" required ref="name" />
        <label>Your Message:</label>
        <textarea placeholder="Message" ref="message"></textarea>
      </div>
      <div slot="form-controls">
        <button @click.prevent="readRefs">Send</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
  import formHelper from './formHelper.vue'
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
        alert(this.$refs.name.value + ' - ' + this.$refs.message.value);
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
