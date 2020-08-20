<template>
    <div class="vote">
        <h3>{{ title }}</h3>

        <div class="vote__list">
            <vote-card v-for="i in data" :key="i.id" :id="i.id" :obj="i" />
        </div>

        <router-link v-if="$route.name != 'voteList' && $route.name != 'vote'" class="button" to="/vote-list"
            >View all open voting</router-link
        >
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        props: {
            title: {
                type: String,
                default: 'Title',
            },
        },
        computed: {
            ...mapGetters({
                data: 'Data/responseData',
            }),
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
            margin: 4em auto;

            &:hover {
                color: #007dff;
            }
        }
    }
</style>
