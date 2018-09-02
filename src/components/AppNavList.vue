<template>
    <nav class="navigation">
        <ul class="list">
            <li v-for="li in navList" class="list__element">
                <router-link :to="{name: li.name}">{{li.name}}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'AppNavList',
    props: {
        navList: Array
    }
}
</script>

<style lang="scss">
    .navigation {
        margin-top: 2rem;
        margin-bottom: 1rem;
        .list {
            padding-left: 0rem;
            .list__element {
                list-style-type: none;
                text-transform: uppercase;
                font-weight: bold;
                a {
                    text-decoration: none;
                    line-height: 3rem;
                    font-size: 1rem;
                    color: #fff;
                    padding-top: 0.5rem;
                    padding-bottom: 0.5rem;
                    padding-right: 1rem;
                }
                a:hover {
                    color: #ccc;
                }
            }
        }
    }
</style>
