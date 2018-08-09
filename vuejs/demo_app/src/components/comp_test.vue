<template>
    <div class="comp_test">

        <input type="text" v-model = "data_1"><br>
        <h3>{{data_1}}</h3>
        <p>{{data_2.first_name}}</p>
        <p v-text = "data_2.last_name"></p>
        <p v-html = "data_3"></p>
        <div v-if = "showFlag">{{showFlag}}</div>
        <ul>
            <li v-for ="key in items">{{key.title}}</li>
        </ul>
        <button v-on:click = "greet('Hi Bro')">click me!</button><br>
        <input type="text" v-on:keyup = "presskey">
        
    </div>
</template>

<script>
    export default {
        name: 'comp_test',
        data() {
            return {
                data_1: 'this is a test',
                data_2: {
                    first_name: 'yang',
                    last_name: 'yang'
                },
                data_3 : '<div class="css_3"> a div demo</div>',

                showFlag: true,
                
                items: [
                    {title: 'item one'},
                    {title: 'item two'},
                    {title: 'item three'}
                ]
            }
        },
        methods : {
            greet : (pass) => alert(pass),
            presskey: function(){
                console.log('the key is pressed');
                
            }

        },
       
    }

</script>

<style scoped>
h3 {
    color:red
}
</style>