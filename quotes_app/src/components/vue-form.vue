<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>
            <input
              type="text"
              id="email"
              class="form-control"
              v-model.lazy="userData.email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              :value="userData.password"
              @input="userData.password=$event.target.value">
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
              type="number"
              id="age"
              class="form-control"
              v-model="userData.age">
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label><br>
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                      id="message"
                      rows="5"
                      class="form-control" v-model="message"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <input
                type="checkbox"
                id="sendmail"
                value="SendMail"
                v-model="sendMail"> Send Mail
            </label>
            <label for="sendInfomail">
              <input
                type="checkbox"
                id="sendInfomail"
                value="SendInfoMail"
                v-model="sendMail"> Send Infomail
            </label>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input
              type="radio"
              id="male"
              value="Male"
              v-model="gender"> Male
          </label>
          <label for="female">
            <input
              type="radio"
              id="female"
              value="Female"
              v-model="gender"> Female
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Priority</label>
          <select
            id="priority"
            class="form-control"
            v-model="selectedPriority">
            <option v-for="priority in priorities"
                    :selected="priority=='Medium'">{{priority}}
            </option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <app-switch v-model="dataSwitch"></app-switch>
          <p v-highlight:background.delayed="'red'">Color this with a global custom directive!</p>
          <p v-local-highlight:background.delayed.blink="{mainColor:'yellow', secondColor:'orange', delay: 500}">A custom
            local directive...</p>
          <div style="width:100px;height:100px; background-color: lightgreen"
               v-customOn:mouseenter="mouseEnter"
               v-customOn:mouseleave="mouseLeave"
               v-customOn:click="mouseClick">
          </div>
          <p></p>

        </div>
      </div>

      <hr>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button @click.prevent
                  class="btn btn-primary">Submit!
          </button>
        </div>
      </div>
    </form>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{userData.email}}</p>
            <p>Password: {{userData.password}}</p>
            <p>Age: {{userData.age}}</p>
            <p style="white-space: pre">Message: {{message}}</p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li v-for="item in sendMail">{{item}}</li>
            </ul>
            <p>Gender: {{gender}}</p>
            <p>Priority: {{selectedPriority}}</p>
            <p>Switched:{{dataSwitch}}</p>
            <hr>
            <p><b>{{filterText | to-uppercase | to-lowercase}}</b></p>
            <hr>
            <input type="text" v-model="anotherFilter">
            <ul>
              <li v-for="fruit in filteredFruits">{{fruit}}</li>
            </ul>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import Switch from './Switch.vue';
  import {fruitMixin} from './fruitMixin';

  export default {
    data(){
      return {
        userData: {
          email: '',
          password: '',
          age: '27'
        },
        message: 'A new text',
        sendMail: [],
        gender: 'Male',
        selectedPriority: 'High',
        priorities: ['High', 'Medium', 'Low'],
        dataSwitch: true,
        filterText: 'Hello there!'
      }
    },
    components: {
      appSwitch: Switch
    },
    directives: {
      'local-highlight': {
        bind(el, binding, vnode){
          let delay = 0;
          if (binding.modifiers['delayed']) {
            delay = 1000;
          }
          if (binding.modifiers['blink']) {
            let mainColor = binding.value.mainColor;
            let secondColor = binding.value.secondColor;
            let currentColor = binding.value;
            setTimeout(() => {
              setInterval(()=> {
                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                if (binding.arg == 'background') {
                  el.style.backgroundColor = currentColor;
                } else {
                  el.style.color = currentColor;
                }
              }, binding.value.delay);
            }, delay);
          } else {
            setTimeout(() => {
              if (binding.arg == 'background') {
                el.style.backgroundColor = binding.value.mainColor;
              } else {
                el.style.color = binding.value.mainColor;
              }
            }, delay);
          }
        }
      },
      customOn: {
        bind(el, binding){

          const type = binding.arg;
          const fn = binding.value;
          el.addEventListener(type, fn);
        }
      }
    },
    methods: {
      mouseEnter(){
        console.log('Mouse entered!');
      },
      mouseLeave(){
        console.log('Mouse left!');
      },
      mouseClick(){
        console.log('Mouse clicked!');
      }
    },
    filters: {
      'to-uppercase'(value){
        return value.toUpperCase();
      }
    },
    mixins:[fruitMixin]

  }
</script>

<style>

</style>
