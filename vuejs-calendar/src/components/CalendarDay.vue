<template>
    <div :class="classObject" @click="captureClick">
        {{day.format('D')}}
        <ul class="event-list">
            <li v-for="event in events">{{event.description}}</li>
        </ul>
    </div>
</template>

<script type="text/babel">
    export default{
        props: ['day'],
        computed: {
            events(){
                return this.$store.state.events.filter(event => event.date.isSame(this.day, 'day'));
            },
            classObject(){
                return {
                    day: true,
                    today: this.day.isSame(this.$moment(), 'day'),
                    past: this.day.isBefore(this.$moment(), 'day'),
                    'not-current-month': !this.day.isSame(this.$moment(), 'month'),
                    active: this.$store.state.eventFormDate.isSame(this.day, 'day') && this.$store.state.eventFormActive
                }
            }
        },
        methods: {
            captureClick(event){
                this.$store.commit('eventFormPos', {x: event.clientX, y: event.clientY});
                this.$store.commit('eventFormActive', true);
                this.$store.commit('eventFormGetDate', this.day);
            }
        }
    }
</script>