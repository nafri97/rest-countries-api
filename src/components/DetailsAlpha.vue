
<script>
import BorderList from './BorderList.vue';
    export default{
        name : 'DetailsAlpha',
        props: ['alpha'],
        data(){
            return {
                countryData: null,
                countryName: '',
            }
        },
        components:{
            BorderList
        },
        mounted(){
            fetch(`https://restcountries.com/v3.1/alpha/`+this.alpha)
            .then((res) => res.json())
            .then((data) => {
                this.countryData = data;
            })
            .catch(err => console.log(err.message));
        },
    }
</script>

<template>
    <router-link :to="{name: 'Home'}" ><button>Back</button></router-link>
    <div class="containerDetail" v-if="countryData">
        <img :src="countryData[0].flags.png"/><br>
        <div>
            <h2>{{ countryData[0].name.common }}</h2>
            <div class="innerDetail">
                <p><b>Native Name:</b> {{ countryData[0].altSpellings[1] }}</p>
                <p><b>Capital:</b> {{ countryData[0].capital[0] }}</p>
                <p><b>Population:</b> {{ countryData[0].population.toLocaleString('en-US') }}</p>
                <p><b>Region:</b> {{ countryData[0].region }}</p>
                <p><b>Sub Region:</b> {{ countryData[0].subregion }}</p>
                <p><b>Top Level Domain:</b> {{ countryData[0].tld[0] }}</p>
                <p><b>Currencies:</b> {{ Object.values(countryData[0].currencies)[0].name }}</p>
                <p><b>Languages:</b> <span v-for="lang in (Object.values(countryData[0].languages))">{{ lang }}, </span></p>
            </div>
            <BorderList :borders="countryData[0].borders"></BorderList>

        </div>

    </div>
    <div v-else>
        <p>now loading...</p>
    </div>
</template>

<style scoped>
    h2{
        font-weight: bolder;
        margin-bottom: 1rem;
        margin-top: 0;
    }
    p{
        font-size: 0.8rem
    }
    b{
        font-weight: 600;
    }
    button{
        margin-top: 150px;
        float: left;
    }
    @media (max-width: 768px) { 
        button{
            margin-left: 1rem
        }
    }
</style>