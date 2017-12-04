Vue.config.productionTip = false;

new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        name: 'Jesse',
        link: 'http://www.google.com',
        finishedLink: '<a href="http://youtube.com">Youtube</a>',
        counter: 0
    },
    methods: {
        changeTitle: function (event) {
            this.title = event.target.value;
        },
        increase: function (step, event) {
            this.counter += step;
            console.log(event);
        },
        alertMe: function () {
            alert("ENTER!!!!!");
        }
    },

    computed: {
        renderTitle: function () {
            console.log("intraaa..");
            return this.title;
        }
    }
});