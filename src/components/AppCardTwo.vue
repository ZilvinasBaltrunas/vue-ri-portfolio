<template>
    <div class="card">
        <div class="top"></div>
        <div class="home__section">
            <h1>{{data.greetings}}</h1>
            <p>{{data.info}}</p>
        </div>
        <div class="bottom"></div>
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
        min-width: 100%;
        background: #fff;
        color: #000000;
        opacity: 0.75;
        border-radius: 1rem;
        .top {
            width: 100%;
            height: 2rem;
            background: #b30000;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
        }
        .home__section {
            padding: 1rem;
            h1 {
                font-size: 2.5rem;
                color: #000000;
            }
            p {
                font-size: 1.5rem;
                line-height: 2rem;
            }
        }
        .bottom {
            width: 100%;
            height: 2rem;
            background: #b30000;
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
        }
    }
</style>
