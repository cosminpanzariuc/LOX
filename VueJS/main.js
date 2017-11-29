Vue.config.productionTip = false;

new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'http://www.google.com',
        finishedLink: '<a href="http://google.com">Google</a>',
        counter: 0
    },
    methods: {
        changeTitle: function (event) {
            this.title = event.target.value;
        },
        renderTitle: function () {
            return this.title;
        },
        increase: function (step, event) {
            this.counter += step;
            console.log(event);
        },
        alertMe: function(){
            alert("ENTER!!!!!");
        }
    }
});