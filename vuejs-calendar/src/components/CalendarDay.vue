<template>
    <div :class="classObject">{{day.format('D')}}</div>
</template>

<script>
    export default{
        props: ['day'],
        computed: {
            classObject(){
                return {
                    day: true,
                    today: this.day.isSame(this.$moment(), 'day'),
                    past: this.day.isBefore(this.$moment(), 'day'),
                    'not-current-month': !this.day.isSame(this.$moment(), 'month')
                }
            }
        }
    }
</script>