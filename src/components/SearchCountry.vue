<script>

export default{
  name: 'SearchCountry',
  data(){
    return {
      countries: [],
      allCountries : [],
      searchQuery: '',
      isInputActive: false
    }
  },
  mounted(){
    fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data)=> {
        this.countries = data;
        this.allCountries = data;
    })
    .catch(err=> console.log(err.message))
  },
  computed: {
    filteredCountries() {
      if (!this.searchQuery) {
        return this.allCountries.slice(0, 6).sort((a, b) => a.name.common.localeCompare(b.name.common)); // Limit to 6 countries, sort alphabetical
      } else {
        const query = this.searchQuery.toLowerCase();
        return this.allCountries.filter(country =>
          country.name.common.toLowerCase().includes(query)
          ).sort((a, b) => a.name.common.localeCompare(b.name.common))
          .slice(0, 6); // Limit to 6 countries
      }
    },
  },
}
</script>

<template>
  <div class="inputContainer">
    <input v-model="searchQuery" type="text" placeholder="Search for a country..." @focus="isInputActive = !isInputActive">
    <svg class='searchImg' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 48 48">
      <path fill="currentColor" d="M 20.5 6 C 12.515556 6 6 12.515562 6 20.5 C 6 28.484438 12.515556 35 20.5 35 C 23.773158 35 26.788919 33.893018 29.220703 32.050781 L 38.585938 41.414062 A 2.0002 2.0002 0 1 0 41.414062 38.585938 L 32.050781 29.220703 C 33.893017 26.788918 35 23.773156 35 20.5 C 35 12.515562 28.484444 6 20.5 6 z M 20.5 10 C 26.322685 10 31 14.677319 31 20.5 C 31 23.295711 29.914065 25.820601 28.148438 27.697266 A 2.0002 2.0002 0 0 0 27.701172 28.144531 C 25.824103 29.912403 23.29771 31 20.5 31 C 14.677315 31 10 26.322681 10 20.5 C 10 14.677319 14.677315 10 20.5 10 z"></path>
    </svg>
    <svg v-if='isInputActive' @click="isInputActive=false" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 30 30">
        <path fill="currentColor" d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
    </svg>
    <div v-if="isInputActive && filteredCountries.length > 0" class="click">
      <div v-for="(item , index) in filteredCountries" :key="item.name" @click="isInputActive=true">
        <router-link :to="{name: 'Details', params: {id: item.name.common} }">{{ item.name.common }}</router-link><br>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.searchImg{
  display: inline-block;
  margin-left: -14.5rem;
  margin-top: -2px;
}
svg{
  display: inline-block;
  margin-right: 12rem;
  margin-top: -2px;
  cursor: pointer;
}
@media (max-width: 1024px) { 
  svg{
    margin-right: 10.1rem;
  }
}
</style>