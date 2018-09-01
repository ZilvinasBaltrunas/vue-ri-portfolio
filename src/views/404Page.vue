<template>
    <section class="page_404">
        <div class="four_zero_four_bg">
            <h1 class="h1">404</h1>
        </div>
        <div class="contant_box_404">
            <h3 class="h3">Look like you're lost</h3>
            <p>the page you are looking for not avaible!</p>
            <div class="button_404">
                <AppButton>
                    <router-link :to="{name: 'Home'}">
                        Go to Home
                    </router-link>
                </AppButton>
            </div>
        </div>
    </section>
</template>

<script>
import AppButton from '@/components/AppButton.vue'
export default {
  name: 'Page404',
  components: {
    AppButton
  }
}
</script>

<style lang="scss">
.page_404 {
    padding: 1rem;
    background:#fff;
    font-family: 'Arvo', serif;
    .four_zero_four_bg {
        background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
        height: 400px;
        background-position: center;
        .h1 {
            text-align: center;
            font-size: 80px;
        }
    }
    .contant_box_404 {
        margin-top: -50px;
        .h3 {
            text-align: center;
        }
        p {
            text-align: center;
        }
        .button_404 {
            display: flex;
            justify-content: center;
        }
    }
}
.page_404  img {
    width: 100%;
}
</style>
