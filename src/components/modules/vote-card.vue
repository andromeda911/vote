<template>
    <article>
        <figure>
            <img :src="image" alt="" />
        </figure>
        <div class="vote-diagram">
            <h4>{{ obj.vote_title }}</h4>
            {{ $t('main[2][1]') }}
            <vote-diagram
                :up="Math.ceil(upBalance) || Math.ceil(obj.vote_up_bal)"
                :down="Math.ceil(downBalance) || Math.ceil(obj.vote_down_bal)"
            />

            <div class="button-group" v-if="$route.name != 'home' && $route.name != 'current'">
                <button class="button button__success" v-on:click="voteUp(obj.vote_up_addr)">
                    {{ $t('main[3][4]') }}
                </button>

                <button class="button button__error" v-on:click="voteDown(obj.vote_down_addr)">
                    {{ $t('main[3][5]') }}
                </button>
            </div>

            <gradient-button v-if="$route.name != 'vote'" :text="$t('main[3][3]')" :url="'current/' + obj.vote_id" />
        </div>
    </article>
</template>

<script>
    import { bus } from '@/main.js'

    export default {
        props: {
            id: {
                type: Number,
                default: null,
            },
            obj: {
                type: Object,
                default: () => [],
            },
        },
        data() {
            return {
                image: this.obj.image,
                balToggle: false,
                upBal: {},
                downBal: {},
            }
        },
        computed: {
            upBalance() {
                if (typeof this.upBal.data !== 'undefined') {
                    return this.upBal.data.B.find(e => e.a == 'VOTE-692M').f
                } else {
                    return null
                }
            },
            downBalance() {
                if (typeof this.downBal.data !== 'undefined') {
                    return this.downBal.data.B.find(e => e.a == 'VOTE-692M').f
                } else {
                    return null
                }
            },
        },
        methods: {
            voteUp(token) {
                bus.$emit('setModal', { token: token, method: 'voteUp' })
            },
            voteDown(token) {
                bus.$emit('setModal', { token: token, method: 'voteDown' })
            },
        },
        created() {
            try {
                const up = new WebSocket('wss://dex.binance.org/api/ws')
                up.onopen = () => {
                    up.send(JSON.stringify({ method: 'subscribe', topic: 'accounts', address: this.obj.vote_up_addr }))
                }
                up.onmessage = ({ data }) => {
                    this.upBal = JSON.parse(data)
                }
                //
                const down = new WebSocket('wss://dex.binance.org/api/ws')
                down.onopen = () => {
                    down.send(JSON.stringify({ method: 'subscribe', topic: 'accounts', address: this.obj.vote_down_addr }))
                }
                down.onmessage = ({ data }) => {
                    this.downBal = JSON.parse(data)
                }
            } catch (err) {
                console.log(err)
            }
        },
    }
</script>

<style lang="scss" scoped>
    article {
        box-shadow: 0 6px 10px -5px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-wrap: wrap;
        text-align: left;
        transition: all 0.2s ease;

        @media (max-width: 768px) {
            flex-direction: column;
        }

        figure {
            flex: 1;
            img {
                height: 100%;
                width: 100%;
            }
        }
        .button-group {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .button {
                border: none;
                border-radius: 5px;
                box-shadow: none;
                color: #ffffff;
                cursor: pointer;
                font-family: inherit;
                font-size: initial;
                padding: 12px 60px;
                margin: 10px 0;

                @media (max-width: 768px) {
                    width: 100%;
                }

                &__success {
                    background-color: #27ae60;
                }
                &__error {
                    background-color: #eb5757;
                }
            }
        }

        .vote-diagram {
            padding: 0 2em 2em;
            flex: 1.5;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            @media (max-width: 768px) {
                padding: 0 1.5em 1.5em;
            }
        }
        h4 {
            font-size: 20px;
            font-weight: 400;
            margin-bottom: 0.5em;
            max-width: 542px;

            @media (max-width: 768px) {
                font-size: 16px;
                margin-top: 1em;
            }
        }

        button {
            align-self: flex-end;
            width: fit-content;
        }

        &:hover {
            box-shadow: 0 20px 20px -15px rgba(0, 0, 0, 0.3);
        }
    }
</style>
