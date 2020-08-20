<template>
    <div class="hero">
        <h1 class="hero__title">
            Participate in voting with<br />
            Vote (BEP8)
        </h1>
        <p class="hero__body">
            Help us to make the right decisions that will fit you.
        </p>
        <gradient-button :text="'Give your vote'" :url="'vote-list'" />
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    .hero {
        background: url('../../assets/map.png') no-repeat center right;
        background-size: 60%;
        margin: 4em auto;
        padding: 8em 1em;
        min-height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        @media (max-width: 768px) {
            align-items: center;
            text-align: center;
            margin: 0 auto;
            padding: 4em 1em;
        }

        &__title {
            font-size: 36px;
            font-weight: normal;
            line-height: 1.425;
            margin-bottom: 0.5em;

            @media (max-width: 768px) {
                font-size: 28px;
            }
        }

        &__body {
            font-size: 18px;
            margin-bottom: 2em;
        }
    }
</style>
