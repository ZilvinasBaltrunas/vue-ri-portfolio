<template>
    <nav class="navigation">
        <ul class="list">
            <li class="list__element">
                <router-link :to="{name: 'About'}">About Me</router-link>
            </li>
            <li class="list__element">
                <router-link :to="{name: 'Qualifications'}">Qualifications</router-link>
            </li>
            <li class="list__element">
                <router-link :to="{name: 'Projects'}">Projects</router-link>
            </li>
            <li class="list__element">
                <router-link :to="{name: 'Gallery'}">Gallery</router-link>
            </li>
        </ul>
    </nav>
</template>

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
