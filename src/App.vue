<template>
  <div id="app">
    <div class="wrapper">
      <div class="left__inner">
        <ProfileForm/>
      </div>
      <hr> 
      <div class="right__inner">
        <Forms/>
      </div>
     </div>
  </div>
</template>

<script>

import ProfileForm from './components/ProfileForm/ProfileForm'
import Forms from './components/Forms/Forms'


export default {
  name: 'App',
  components: {ProfileForm, Forms},
}
</script>

<style>

  body {
    background-color: #10121b;
  
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ccc;
    margin-top: 60px;

  }

  .wrapper {
    display: flex;
    justify-content: space-around;
    max-width: 1200px;
    margin: 0 auto;
  }

  .left__inner {
    width: 500px;
  }

  .right__inner {
    width: 500px;
  }

  hr {
    background: white;
  }

</style>
