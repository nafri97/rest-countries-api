<script>
import Countries from './data.json'
import { ref } from 'vue'


export default{
  name: 'Home',
  data(){
    return {
      countries: ref(Countries),
      parts: ""
    }
  },
}

</script>

<template>
  <div class="container" >
    <!-- <label for="country"></label>
    <input id="country" type="text" v-model="country">  -->
      <div v-for="(item , index) in countries" :key="item.name" class="card">
        <img :src="item.flag"/><br>
        <router-link :to="{name: 'Details', params: {id: item.name} }"><b>{{ item.name }}</b></router-link><br>
        <b>Native Language:</b> {{ item.languages[0].nativeName }} <br>
        <b>Population:</b> {{ item.population.toLocaleString('en-US')}} <br>
        <b>Region:</b> {{ item.region }} <br>
        <b>Capital:</b> {{ item.capital }} <br>
      </div>
    </div>
  <router-view/>
</template>

<style scoped>

img{
  width: auto;
  height: 150px;
}

</style>
