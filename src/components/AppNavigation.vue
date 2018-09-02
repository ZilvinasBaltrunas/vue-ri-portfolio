<template>
    <aside class="sidebar">
        <div class="sidebar-inner">
            <AppPerson/>
            <AppNavList :navList="navList"/>
            <div class="social">
                <div class="social-title">Get in touch</div>
                <div class="social-content">
                    <!-- add array of list -->
                    <a href="mailto:agriukas@gmail.com" class="button" title="mail: agriukas@gmail.com">
                        <font-awesome-icon icon="envelope" />
                    </a>
                    <a href="https://facebook.com/rima.baltruniene.9" class="button" title="facebook: rima.baltruniene.9">
                        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
                    </a>
                    <a href="https://www.linkedin.com/in/rima-baltruniene-4a0b8398/" class="button" title="linkedin: rima-baltruniene-4a0b8398">
                        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }"/>
                    </a>
                </div>
            </div>
        </div>
    </aside>
</template>

<script>
import AppNavList from '@/components/AppNavList'
import AppPerson from '@/components/AppPerson'

export default {
    name: 'AppNavigation',
    components: {
        AppNavList,
        AppPerson
    },
    data () {
        return {
            navList: [
                {
                    name: 'About'
                },
                {
                    name: 'Qualifications'
                },
                {
                    name: 'Projects'
                },
                {
                    name: 'Gallery'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    .sidebar {
        width: 25%;
        top: 0;
        bottom: 0;
        left: 0;
        position: fixed;
        background: #b30000;
        opacity: 0.93;
        display: flex;
        justify-content: center;
        align-items: center;
        .sidebar-inner {
            margin-left: 1rem;
            margin-right: 1rem;
            .social {
                .social-title {
                    text-transform: uppercase;
                    color: #fff;
                    font-size: 0.7rem;
                    margin-bottom: 0.5rem;
                }
                .social-content {
                    .button {
                        font-size: 1.5rem;
                        margin-right: 1rem;
                    }
                    .button:hover {
                        color: #ccc;
                    }
                }
            }
        }
    }

a {
    text-decoration: none;
    line-height: 30px;
    font-size: 1rem;
    color: #fff;
}

ul {
    padding-left: 0rem;
}

li {
    list-style-type: none;
    text-transform: uppercase;
    font-weight: bold;
}

.picture {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
}
</style>
