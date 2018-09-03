<template>
    <main class="main">
        <router-view></router-view>
    </main>
</template>

<script>
export default {
    name: 'AppBox'
}
</script>

<style lang="scss">
    .main {
        position: absolute;
        width: 75%;
        // top: 0;
        // bottom: 0;
        right: 0;
        // position: fixed;
    }
</style>
