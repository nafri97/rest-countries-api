<script>
export default{
    name : 'BorderList',
    props: ['borders'],
    data(){
        return {
            countryData: null,
        }
    },
    methods: {
        reloadPage() {
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    },
    mounted(){
        this.countryData = this.borders;
    },
    }
</script>
<template>
    <div>
        <h2>Border Countries:</h2>
        <ul>
            <li v-for="border in countryData">
                <router-link :to="{name: 'DetailsAlpha', params: {alpha: border}}">
                    <button v-on:click="reloadPage">{{ border }}</button>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
div{
    max-width: 50vw
}
</style>