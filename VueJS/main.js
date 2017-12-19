Vue.config.productionTip = false;

new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        name: 'Double Binding',
        link: 'http://www.google.com',
        finishedLink: '<a href="http://youtube.com">Youtube</a>',
        counter: 0,
        isRed: false,
        color: 'green',
        progressBar: {
            width: '0px',
            backgroundColor: 'red'
        }
    },

    methods: {
        changeTitle: function (event) {
            this.title = event.target.value;
        },
        increase: function (step, event) {
            this.counter += step;
        },
        alertMe: function () {
            alert("ENTER!!!!!");
        },
        startProgress: function(){
            var vm = this;
            var width = 0;
            setInterval(function(){
                width += 10;
                vm.progressBar.width = width + "px";
            }, 500);
        }
    },

    computed: {
        renderTitle: function () {
            return this.title;
        },
        result: function(){
            return this.counter == 10 ? "BINGO!!!" : "Not there yet..."
        },
        changeBetweenBlueAndRed: function(){
            return{
                red: this.isRed,
                blue: !this.isRed
            };
        },
    },

    watch: {
        result: function(value){
            var vm = this;
            setTimeout(function(){
                vm.counter = 0;
            }, 2000);
        }
    }
});