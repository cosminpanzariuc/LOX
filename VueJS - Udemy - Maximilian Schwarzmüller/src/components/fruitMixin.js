export const fruitMixin = {
    data(){
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            anotherFilter: ''
        }
    },

    computed: {
        filteredFruits(){
            return this.fruits.filter((element)=> {
                return element.match(this.anotherFilter);
            });
        }
    }
};
