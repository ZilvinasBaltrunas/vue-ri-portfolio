<template>
    <main class="main">
        <router-view></router-view>
    </main>
</template>

<script>
export default {
    name: 'appBox'
}
</script>

<style lang="scss">
    .main {
        width: 75%;
        top: 0;
        bottom: 0;
        right: 0;
        position: fixed;
    }
</style>
