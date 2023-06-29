<script>
import Copyright from './components/copyright.vue'
import GithubCorner from './components/githubCorner.vue'
import NightMode from './components/nightMode.vue'


export default{
  name: 'App',
  components:{
    Copyright,
    GithubCorner,
    NightMode,

  },
}
</script>

<template>
    <GithubCorner/>
    <NightMode/>
    <router-view/>
    <Copyright/>
</template>

