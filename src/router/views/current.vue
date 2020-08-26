<template>
    <section>
        <main-votelist :title="$t('current[0][0]')" />
        <main-votenext />
    </section>
</template>

<script>
    export default {}
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
