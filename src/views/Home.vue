<template>
    <div class="home-container">
        <AppCard :data="data"/>
    </div>
</template>

<script>
import AppCard from '@/components/AppCard'
export default {
    name: 'Home',
    components: {
        AppCard
    },
    data () {
        return {
            data: {
                greetings: 'Hi, I am Rima.',
                info: 'I work as a Project Manager at Waste Water Treatment Plant constructions.'
            }
        }
    }
}
</script>

<style lang="scss">
    .home-container {
        padding: 2rem;
    }
</style>
