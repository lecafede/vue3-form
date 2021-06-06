<template>
  <App id="app">
    <Wrapper>
      <left-inner>
         <ProfileForm/>
      </left-inner>
      <hr> 
      <right-inner>
        <Forms/>
      </right-inner>
    </Wrapper>
  </App>
</template>

<script>

import ProfileForm from './components/ProfileForm/ProfileForm'
import Forms from './components/Forms/Forms'
import {App, Wrapper, LeftInner, RightInner} from './style'

export default {
  components: {ProfileForm, Forms, App, Wrapper, LeftInner, RightInner},
}
</script>

<style>
  body {background-color: #10121b;}
  hr { background: white; }
</style>
