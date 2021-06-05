import {createStore} from 'vuex';

export default createStore ({
    state: {
        countries: [],
        forms: []
    },
    actions: {
        async fetchCountries(ctx) {
            const res = await fetch('https://restcountries.eu/rest/v2/region/europe');
            const countries = await res.json();
            
            ctx.commit('updateCountries', countries) 
        },
        
    },
    mutations: {
        updateCountries(state, countries) { 
            state.countries = countries
        },
        
        createForm(state, newForm) {
            state.forms.unshift(newForm)
        }
    },
    getters: {

        allForms(state) {
            return state.forms
        },
        
        allCountries(state) {
            return state.countries
        },
        
        formsCount(state, getters) {
            return getters.allForms.length
        }
    }
})


