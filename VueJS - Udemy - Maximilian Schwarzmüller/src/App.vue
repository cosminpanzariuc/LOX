<template>
    <div class="container">
        <head-bar></head-bar>
        <router-view></router-view>
        <hr>
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @newQuoteAdded="newQuote($event)"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote($event)"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info: Click on a Quote to delete it!
                </div>
            </div>
        </div>

        <div class="form-group">
            <label>Username</label>
            <input class="form-control" type="text" v-model="user.username">
        </div>
        <div class="form-group">
            <label>Mail</label>
            <input class="form-control" type="text" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <ul class="list-group">
            <li class="list-group-item" v-for="u in users">
                {{u.username}} - {{u.email}}
            </li>
        </ul>

        <basic-form></basic-form>

    </div>
</template>

<script type="text/babel">
    import QuoteGrid from './components/QuoteGrid';
    import NewQuote from './components/NewQuote.vue';
    import Header from './components/Header.vue';
    import basicForm from './components/vue-form.vue';
    import HeadBar from './components/HeadBar.vue';

    export default {
        data(){
            return {
                quotes: ['Just a Quote too see something'],
                maxQuotes: 10,
                user: {
                    username: '',
                    email: ''
                },
                users: []
            }
        },

        methods: {
            newQuote(quote){
                if (this.quotes.length >= this.maxQuotes) {
                    return alert('Please delete Quotes first!');
                }
                this.quotes.push(quote);
            },
            deleteQuote(index){
                this.quotes.splice(index, 1);
            },
            submit(){
                this.$http.post('', this.user).then(response=> {
                    console.log(response);
                }, error => {
                    console.log(error);
                });
            },
            fetchData(){
                this.$http.get('').then(response => {
                    return response.json();
                }).then(data => {
                    console.log(data);
                    const resultArray = [];
                    for (let key in data) {
                        resultArray.push(data[key]);
                    }
                    this.users = resultArray;
                });
            }
        },

        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header,
            basicForm: basicForm,
            headBar: HeadBar
        }
    }
</script>

<style>

</style>
