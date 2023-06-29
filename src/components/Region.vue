<script>
import SearchCountry from './searchCountry.vue'
import FilterRegion from './FilterRegion.vue';
export default{
  name: 'Region',
  props: ['reg'],
  data(){
    return {
      countries: [],
    }
  },
  components:{
    FilterRegion,
    SearchCountry
  },
  mounted(){
    fetch(`https://restcountries.com/v3.1/region/`+this.reg)
    .then((res) => res.json())
    .then((data)=> {
        this.countries = data;
    })
    .catch(err=> console.log(err.message))
  },
}
</script>

<template>
    <FilterRegion :region="reg"></FilterRegion>
    <SearchCountry/>
  <div class="container" >
      <div v-for="(item , index) in countries" :key="item.name" class="card">
            <img :src="item.flags.png"/><br>
            <router-link :to="{name: 'Details', params: {id: item.name.common} }"><h2><b>{{ item.name.common }}</b></h2></router-link><br>
            <router-view/>
            <b>Population:</b> {{ item.population.toLocaleString('en-US')}} <br>
            <b>Region:</b> {{ item.region }} <br>
            <span v-if="item.capital"><b>Capital:</b> {{ item.capital[0] }} <br></span>
      </div> 
    </div>

</template>

<style scoped>

img{
  width: auto;
  height: 150px;
}

</style>