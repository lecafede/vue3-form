<template>
    <div>
        <h2>Form Count: {{formsCount}}</h2>
        <hr>
        <div class="form" v-for="forms in allForms" :key="forms.id">
            <h3>ID формы: # {{forms.id}}</h3>
            <p><span>Name:</span> {{forms.name}}</p>
            <p><span>Surname:</span>  {{ forms.surname }} </p>
            <p><span>Email:</span>  {{ forms.email}} </p>
            <p><span>Country:</span> {{forms.country}}</p>
            <p><span>Password:</span> {{forms.password}}</p>
        </div>
    </div>
</template>


<script>
import {mapGetters, mapActions} from 'vuex'
export default {

  name: 'Forms',
  computed: mapGetters(['formsCount', 'allForms']), 
  methods: mapActions(['fetchCountries']),

  async mounted() {
    this.fetchCountries()
  }
}
</script>


<style scoped>

  span {
    font-weight: 700;
    color: white
  }

  p {
    text-align: left;
    margin-left: 45px;
  }
  .form {
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 1rem; 
    margin-top: 1rem;
    background-color: #141e30; 
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }

  h2 {
    text-align: left;
  }

</style>