<template>
    <section>
        <main-hero />

        <main-slogan
            :text="
                'TBCC is growing and developing and we want our users to take an active part in innovations. For this purpose, we have created a service for online voting. With it, you can cast your vote for or against new activity.'
            "
        />

        <main-example />

        <main-votelist :title="'Current voting'" />

        <main-votenext />

        <main-slogan
            :text="'We want to receive feedback from you. If you have ideas of voting — don`t hesitate to offer it.'"
            :buttonText="'Suggest a voting topic'"
        />
    </section>
</template>

<script>
    export default {
        data() {
            return {}
        },
    }
</script>

<style lang="scss" scoped>
    section {
        div {
            margin: 2em auto;
            max-width: 1280px;
            padding: 1em;
            width: 100%;
        }
    }
</style>
