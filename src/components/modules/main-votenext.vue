<template>
    <div class="vote-previous">
        <h3 v-if="$route.name != 'completed'">{{ $t('main[4][0]') }}</h3>

        <div class="vote-previous__list">
            <article>
                <figure>
                    <img src="../../assets/votecard1.png" alt="" />
                </figure>
            </article>

            <article>
                <figure>
                    <img src="../../assets/votecard2.png" alt="" />
                </figure>
            </article>

            <article>
                <figure>
                    <img src="../../assets/votecard3.png" alt="" />
                </figure>
            </article>
        </div>

        <a v-if="$route.name != 'current'" href="" class="button">{{ $t('main[4][1]') }}</a>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    .vote-previous {
        text-align: center;

        &__list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 2em;

            @media (max-width: 768px) {
                grid-template-columns: repeat(1, 1fr);
            }
        }

        h3 {
            font-size: 32px;
            font-weight: 400;
            margin-bottom: 1em;

            text-align: left;

            @media (max-width: 768px) {
                font-size: 24px;
                text-align: center;
            }
        }

        a {
            display: inline-block;
            border: 1px solid #007dff;
            border-radius: 5px;
            padding: 12px 30px;
            margin: 4em auto 0;

            &:hover {
                color: #007dff;
            }
        }
    }
</style>
