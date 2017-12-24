Vue.config.productionTip = false;

// new Vue({
//     el: '#app',
//     data: {
//         title: 'Hello World!',
//         name: 'Double Binding',
//         link: 'http://www.google.com',
//         finishedLink: '<a href="http://youtube.com">Youtube</a>',
//         counter: 0,
//         isRed: false,
//         color: 'green',
//         progressBar: {
//             width: '0px',
//             backgroundColor: 'red'
//         },
//         show: true,
//         ingredients: ['meat', 'fruit', 'cookies'],
//         myObject: {
//             title: 'Lord of the Rings',
//             author: 'J.R.R. Tolkiens',
//             books: '3'
//         },
//         persons: [
//             {name: 'Max', age: 27, color: 'green'},
//             {name: 'Anna', age: '21', color: 'blue'}
//         ]
//     },
//
//     methods: {
//         changeTitle: function (event) {
//             this.title = event.target.value;
//         },
//         increase: function (step, event) {
//             this.counter += step;
//         },
//         alertMe: function () {
//             alert("ENTER!!!!!");
//         },
//         startProgress: function(){
//             var vm = this;
//             var width = 0;
//             setInterval(function(){
//                 width += 10;
//                 vm.progressBar.width = width + "px";
//             }, 500);
//         }
//     },
//
//     computed: {
//         renderTitle: function () {
//             return this.title;
//         },
//         result: function(){
//             return this.counter == 10 ? "BINGO!!!" : "Not there yet..."
//         },
//         changeBetweenBlueAndRed: function(){
//             return{
//                 red: this.isRed,
//                 blue: !this.isRed
//             };
//         },
//     },
//
//     watch: {
//         result: function(value){
//             var vm = this;
//             setTimeout(function(){
//                 vm.counter = 0;
//             }, 2000);
//         }
//     }
// });\\


new Vue({
   el: "#game",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },

    methods:{
        startGame: function(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },

        attack: function(){
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage + ' points'
            });
            if(this.checkWin()){
                return;
            };
            this.monsterAttacks();
        },

        specialAttack: function(){
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster hard for ' + damage + ' points'
            });
            if(this.checkWin()){
                return;
            };
            this.monsterAttacks();
        },

        heal: function(){
            if(this.playerHealth <= 90){
                this.playerHealth += 10;
            }else{
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10'
            });
            this.monsterAttacks();
        },

        giveUp: function(){
            this.gameIsRunning = false;

        },

        monsterAttacks: function(){
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage + ' points'
            });
        },

        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },

        checkWin: function(){
            if(this.monsterHealth <=0){
                this.monsterHealth = 0;
                if(confirm('You won! New Game?')){
                    this.startGame();
                }else{
                    this.gameIsRunning = false;
                }
                return true;
            }else if(this.playerHealth <=0){
                this.playerHealth = 0;
                if(confirm('You lost! New Game?')){
                    this.startGame();
                }else{
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});
