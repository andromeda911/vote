<template>
    <section v-if="data">
        <div class="vote" v-if="Date.parse(data.date_end.slice(0, 10)) >= currentTime">
            <h3>{{ data.vote_title }}</h3>

            <div class="vote__list">
                <vote-card :obj="data" />
            </div>

            <router-link v-if="$route.name != 'current' && $route.name != 'vote'" class="button" to="/current">{{
                $t('main[7][2]')
            }}</router-link>
        </div>

        <div class="heading">
            <h2>{{ $t('main[7][0]') }}</h2>
            <p>
                {{ $t('main[7][1]') }}
            </p>

            <timer :deadline="data.date_end.slice(0, 10)"></timer>
        </div>

        <main-votenext />
    </section>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        data() {
            return {
                currentTime: Date.parse(new Date()),
            }
        },
        computed: {
            ...mapGetters({
                obj: 'Data/responseData',
            }),
            data() {
                let d = this.obj.find(e => e.vote_id == this.$route.params.id)
                return d
            },
        },

        methods: {
            ...mapActions('Data', ['votes']),
            async reloadData() {
                await this.votes()
            },
        },
        async mounted() {
            await this.reloadData()
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
    .vote {
        text-align: center;

        &__list {
            display: grid;
            grid-gap: 3em;

            @media (max-width: 768px) {
                text-align: center;
            }
        }

        h3 {
            font-size: 32px;
            font-weight: 400;
            margin-bottom: 1em;
            max-width: 820px;

            text-align: left;

            @media (max-width: 768px) {
                text-align: center;
            }
        }

        a {
            display: inline-block;
            border: 1px solid #007dff;
            border-radius: 5px;
            padding: 12px 30px;
            margin: 4em auto;

            &:hover {
                color: #007dff;
            }
        }
    }
    .heading {
        margin: 4em auto 0;
        text-align: center;

        h2 {
            font-size: 36px;
            font-weight: normal;
        }

        p {
            display: inline-block;
            max-width: 472px;
        }
    }
</style>
