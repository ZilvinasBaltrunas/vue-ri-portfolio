<template>
    <div>
        <div class="person-box">
            <router-link class="person" :to="{name: 'Home'}">
                <div class="person-picture">
                    <img src="../assets/images/personalphoto.jpg" alt="picture" class="picture">
                </div>
            </router-link>
        </div>
        <div class="person-content">
            <h1 class="person-name">Rima Baltrūnienė</h1>
            <h2 class="person-position">Waste Water Treatment Plant Project Manager</h2>
        </div>
    </div>
</template>

<style lang="scss">
    .person-box {
        display: flex;
        justify-content: center;
        align-items: center;
        .person-picture {
            width: 10.5rem;
            height: 10.5rem;
            border-radius: 50%;
            margin-top: 1rem;
            margin-bottom: 1rem;
            background: #ccc;
            display: flex;
            justify-content: center;
            align-items: center;
            .picture {
                width: 10rem;
                height: 10rem;
                border-radius: 50%;
            }
            .picture:hover {
                transform: scale(1.02);
                transition: 0.5s;
                filter: brightness(80%);
            }
        }
    }
    .person-content {
        .person-name {
            font-size: 22px;
            font-weight: 500;
            text-transform: uppercase;
            text-align: center;
            color: #fff;
        }
        .person-position {
            font-size: 16px;
            font-weight: 300;
            text-align: center;
            color: #fff;
        }
    }
</style>
