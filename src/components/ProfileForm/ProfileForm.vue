<template>
    <div class="profile-form">
        <form class="form" @submit.prevent="submit">
            <h3>Form Creator</h3>
            <div :class="{ error: v$.name.$errors.length }">
                 <div class="input-errors" v-for="error of v$.name.$errors" :key="error.$uid">
                    <div class="error-msg">*{{ error.$message }}</div>
                </div>
                 <Input type="text" theme="dark" placeholder="Name" v-model="name"/>
            </div>
            <div :class="{ error: v$.surname.$errors.length }">
                 <div class="input-errors" v-for="error of v$.surname.$errors" :key="error.$uid">
                    <div class="error-msg">*{{ error.$message }}</div>
                </div>
                 <Input type="Surname" placeholder="Surname" v-model="surname"/>
            </div>
            <div :class="{ error: v$.email.$errors.length }">
                 <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
                    <div class="error-msg">*{{ error.$message }}</div>
                </div>
                 <Input type="text" placeholder="Email" v-model="email"/>
            </div>
            <div :class="{ error: v$.country.$errors.length }">
                 <div class="input-errors" v-for="error of v$.country.$errors" :key="error.$uid">
                    <div class="error-msg">*{{ error.$message }}</div>
                </div>
                <Select v-model="country">
                    <option value="" disabled selected>Choose Country</option>
                    <option v-for="country in allCountries" :key="country.id">{{country.name}}</option>
                </Select>
            </div>
            <div :class="{ error: v$.password.$errors.length }">
                 <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
                    <div class="error-msg">*{{ error.$message }}</div>
                </div>
                 <Input type="password" placeholder="Password" v-model="password"/>
            </div>
            <Button class="button" type="submit">Create Form</Button>   
        </form>
    </div>
</template>

<script>

import {mapMutations, mapGetters, mapActions} from 'vuex'
import {Input, Select, Button} from './style'
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
        Button
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


<style scoped>
    .form {
        background-color: #141e30;
        padding: 20px 50px 40px 20px;
        border-radius: 15px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }

    button {
        margin-top: 20px;   
    }
    body {
        margin:0;
        padding:0;
        font-family: sans-serif;
        background: linear-gradient(#141e30, #243b55);
    }

    h3 {
        font-size: 30px;
    }


    .error-msg {
        color: rgb(199, 15, 15);
        text-align: left;
        padding-bottom: 5px;
    }
</style>