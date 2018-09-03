<template>
    <div class="about-container">
        <AppCardTwo :data="data"/>
    </div>
</template>

<script>
import AppCardTwo from '@/components/AppCardTwo'
export default {
    name: 'About',
    components: {
        AppCardTwo
    },
    data () {
        return {
            data: {
                greetings: 'ABOUT ME',
                info: `I am an Environmental Engineer, MSc. I have always been working in Water & Wastewater Treatment Sector.
                    I worked as a Process and R&D Engineer in the beginning of my career, doing WWTP process engineering and conducting research on new technologies and applications on the field.
                    Afterwards I started working as a Project Manager, running 3 major WTPs and 4 WWTPs, 3 Natural WWTPs, 3 Packaged WWTPs, 2 Packaged WTPs, and 38 Pumping Stations.
                    Currently, I am working as a Project and Wastewater Treatment Plant Manager. I am responsible from all Budget Management and Cost Controls, Personnel Management, HSE Management,
                    Procurement Management, Process Engineering and Control of WWTPs, Administrative Works, Accountancy, Mechanical and Electrical Works Management.`
            }
        }
    }
}
</script>

<style lang="scss">
    .about-container {
        margin: 2rem;
        display: flex;
        justify-content: center;
    }
</style>
