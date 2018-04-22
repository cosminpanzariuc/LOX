<template>
    <div id="event-form" :class="{active: active}" :style="{top:top, left:left}">
        <button id="close-button" @click="close">&#10005</button>
        <h4>Add an event</h4>
        <p>{{date.format('dddd, MMM Do')}}</p>
        <div class="text">
            <input type="text" v-focus v-model="description" placeholder="Dinner at Pancho's" @keyup.enter="create">
        </div>
        <div class="buttons">
            <button @click="create">Create</button>
        </div>
    </div>
</template>

<script type="text/babel">
    export default{
        data(){
            return{
                description: ''
            }
        },
        methods: {
            close(){
                this.$store.commit('eventFormActive', false);
            },
            create(){
                if(this.description.length){
                    this.$store.dispatch('addEventAction', this.description).then(returnedPromise => {
                        this.description = '';
                        this.$store.commit('eventFormActive', false);
                    });

                }
            }
        },
        computed: {
            date(){
                return this.$store.state.eventFormDate;
            },
            active(){
                return this.$store.state.eventFormActive;
            },
            top(){
                return `${this.$store.state.eventFormPosY}px`;
            },
            left(){
                return `${this.$store.state.eventFormPosX}px`;
            }

        },
        directives:{
            focus:{
                update(el){
                    el.focus();
                }
            }
        }
    }
</script>