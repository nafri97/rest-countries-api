<script>            
    export default{
        name : 'FilterRegion',
        props: ['region'],
        data(){
            return{
                Regions: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                filter: '',
                clicked: false,
            }
        },
        computed: {
        filteredRegions() {
            if (this.filter) {
                return this.Regions.filter((region) =>
                region.toLowerCase().includes(this.filter.toLowerCase())
                );
            }
            return this.Regions;
            }
        },
        methods: {
            shouldShowFilterArrow(Region) {
            return Region === this.filter;
            },
            reloadPage() {
                setTimeout(() => {
                    window.location.reload();
                }, 100);
            }
        }
    }
</script>
<template>
    <div>
        <button @click="clicked=!clicked"><span v-if="region">{{ region }}</span><span v-else>Filter by Region</span>
            <svg width="10" height="10" viewBox="0 0 10 10">
                <path d="M0 0 L5 5 L10 0" stroke="black" stroke-width="1" fill="none"/>
            </svg>
        </button>
        <div class="clic" v-if="clicked">
            <ul>
                <li v-for="Region in Regions" :key="Region">
                    <router-link :to="{ name: 'Region', params: { reg: Region } } " v-on:click="reloadPage">
                        {{ Region }}
                    </router-link>
                    <span class="filter-arrow" v-if="shouldShowFilterArrow(Region)"></span>
                </li>
                <RouterView/>
                <li>
                    <router-link :to="{name: 'Home'}">
                        none
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    div{
        width: 200px;
        margin-top: 120px;
        margin-left: 60vw;
        height: 50px;
    }
    .clic{
        margin-top: 0;
        background-color: var(--bg-3);
        height: 10rem;
        text-align: left;
        padding: 0.5rem 1.5rem;
        margin-left: 0;
        position: absolute;
        border-radius: 0.2rem;
    } 
    ul{
        display: inline-block;
        gap: 1rem;
        text-align: left;
    }
    li{
        margin: 0;
        z-index: 20
    }
    svg{
        display: inline-block;
        margin-left: 1rem;
    }
    @media(max-width: 1024px){
        div{
        width: 200px;
        margin-top: 180px;
        margin-left: 0.5rem;
        height: 50px;
    }
    }
</style>