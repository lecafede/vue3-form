<template>
    <div>
        <form-count>Form Count: {{formsCount}}</form-count>
        <hr>
        <Form class="form" v-for="forms in allForms" :key="forms.id">
            <h3>Form ID: # {{forms.id}}</h3>
            <Text><bold-decorator>Name:</bold-decorator> {{forms.name}}</Text>
            <Text><bold-decorator>Surname:</bold-decorator>   {{ forms.surname }}</Text>
            <Text><bold-decorator>Email:</bold-decorator>   {{ forms.email}} </Text>
            <Text><bold-decorator>Country:</bold-decorator>  {{forms.country}} </Text>
            <Text><bold-decorator>Password:</bold-decorator>  {{forms.password}}</Text>
        </Form>
    </div>
</template>


<script>
import {mapGetters, mapActions} from 'vuex'
import {FormCount, Form, Text, BoldDecorator} from './style'
export default {

  name: 'Forms',
  computed: mapGetters(['formsCount', 'allForms']), 
  methods: mapActions(['fetchCountries']),
  components: {
    FormCount,
    Form,
    Text,
    BoldDecorator
  },

  async mounted() {
    this.fetchCountries()
  }
}
</script>

