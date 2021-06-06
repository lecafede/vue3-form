<template>
    <div class="profile-form">
        <Form class="form" @submit.prevent="submit">
            <form-title>Form Creator</form-title>
            <div :class="{ error: v$.name.$errors.length }">
                 <div class="input-errors" v-for="error of v$.name.$errors" :key="error.$uid">
                    <error-message>*{{ error.$message }}</error-message>
                </div>
                 <Input type="text" theme="dark" placeholder="Name" v-model="name"/>
            </div>
            <div :class="{ error: v$.surname.$errors.length }">
                 <div class="input-errors" v-for="error of v$.surname.$errors" :key="error.$uid">
                    <error-message>*{{ error.$message }}</error-message>
                </div>
                 <Input type="Surname" placeholder="Surname" v-model="surname"/>
            </div>
            <div :class="{ error: v$.email.$errors.length }">
                 <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
                    <error-message>*{{ error.$message }}</error-message>
                </div>
                 <Input type="text" placeholder="Email" v-model="email"/>
            </div>
            <div :class="{ error: v$.country.$errors.length }">
                 <div class="input-errors" v-for="error of v$.country.$errors" :key="error.$uid">
                    <error-message>*{{ error.$message }}</error-message>
                </div>
                <Select v-model="country">
                    <option value="" disabled selected>Choose Country</option>
                    <option v-for="country in allCountries" :key="country.id">{{country.name}}</option>
                </Select>
            </div>
            <div :class="{ error: v$.password.$errors.length }">
                 <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
                   <error-message>*{{ error.$message }}</error-message>
                </div>
                 <Input type="password" placeholder="Password" v-model="password"/>
            </div>
            <Button class="button" type="submit">Create Form</Button>   
        </Form>
    </div>
</template>

<script>

import {mapMutations, mapGetters, mapActions} from 'vuex'
import {Input, Select, Button, ErrorMessage, Form, FormTitle} from './style'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength} from '@vuelidate/validators'

export default {
    data() {
        return {
            v$: useVuelidate(), 
            name: '',
            surname: '',
            email: '',
            country: '',
            password: '',

        }
    },
    validations() {
        return {
            name: {required, minLength: minLength(3)},
            surname: {required, minLength: minLength(3)},
            email: {required, email},
            country: {required},
            password: {required, minLength: minLength(6)}
        }
    },
    components: {
        Input,
        Select,
        Button,
        ErrorMessage,
        Form,
        FormTitle
    },

    computed: mapGetters(['formsCount', 'allCountries']),
    methods: {
    
        ...mapMutations(['createForm']),
        ...mapActions(['fetchCountries']),
        
        submit() {
            this.v$.$validate()
            if (!this.v$.$error) {
                this.createForm({
                    id: Date.now(),
                    name: this.name,
                    surname: this.surname,
                    email: this.email,
                    country: this.country,
                    password: this.password
            }) 
                this.name = this.surname = this.email = this.country = this.password = "";
                
                } 
            }
        },
    }
</script>
