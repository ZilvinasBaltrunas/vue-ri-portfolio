<template>
    <div class="card">
        <div class="home__section">
            <h1>{{data.greetings}}</h1>
            <p>{{data.info}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppCard',
    props: {
        data: Object
    }
}
</script>

<style lang="scss">
    .card {
        width: 100%;
        background: #696969;
        color: #fff;
        opacity: 0.8;
        border: 0.3rem solid #787878;
        .home__section {
            padding: 1rem;
            font-weight: bold;
            h1 {
                font-size: 2.5rem;
                color: #fff;
                text-shadow: 2px 2px #808080;
            }
            p {
                font-size: 1.5rem;
                line-height: 2rem;
                text-shadow: 2px 2px #808080;
            }
        }
    }
</style>
