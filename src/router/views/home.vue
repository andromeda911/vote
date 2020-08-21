<template>
    <section>
        <main-hero />

        <main-slogan :text="$t('main[1][0]')" />

        <main-example />

        <main-votelist :title="$t('main[3][0]')" />

        <main-votenext />

        <main-slogan :text="$t('main[5][0]')" :buttonText="$t('main[5][1]')" :url="'topic'" />
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
