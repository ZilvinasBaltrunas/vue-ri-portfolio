<template>
    <nav class="navigation">
        <ul class="list">
            <li class="list__element"><a href="#">My skills &amp; offer</a></li>
            <li class="list__element"><a href="#">Projects</a></li>
            <li class="list__element"><a href="#">Contact</a></li>
            <li class="list__element"><a href="#">About me</a></li>
            <li class="list__element"><a href="#">Gallery</a></li>
            <li class="list__element"><a href="#">My talks</a></li>
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
                    line-height: 30px;
                    font-size: 1rem;
                    color: #fff;
                }
                a:hover {
                    color: #ccc;
                }
            }
        }
    }    
</style>
