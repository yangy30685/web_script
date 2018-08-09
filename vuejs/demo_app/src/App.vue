<template>
  <div id="app">
  <comp_test></comp_test>  
  
  </div>
</template>

<script>
import comp_test from './components/comp_test'

export default {
  name: 'App',
  components: {
     comp_test
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.css_3 {
    width:100px;
    height: 100px;
    border: 2px solid black;
    color: blue;
}
</style>
