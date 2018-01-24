<template>
    <div>
        <!--<p>Triple counter is: {{ counter }}</p>-->
        <!--<p>Number of Clicks: {{ clicks }}</p>-->

        <p>Another result counter is: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ stringCounter }}</p>
    </div>

</template>

<script type="text/babel">
    import {mapGetters} from 'vuex';

    export default {
//        computed:{
//            counter(){
////                return this.$store.state.counter * 2;
//                return this.$store.getters.doubleCounter;
//            },
//            clicks(){
//                return this.$store.getters.stringCounter;
//            }
//        }
        computed: {
            ...mapGetters([
                'doubleCounter',
                'stringCounter'
            ])
        }

    }
</script>