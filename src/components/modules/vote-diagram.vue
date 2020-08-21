<template>
    <div>
        {{ $t('main[3][2]') }}

        <ul class="diagram" :style="gridStyle">
            <li class="diagram__up"></li>
            <li class="diagram__down"></li>
        </ul>

        <ul class="diagram__items">
            <li class="diagram__up-item">
                <span>{{ $t('main[3][4]') }} {{ percentage(up).toFixed(0) }} %</span>
                {{ up }} VOTE(BEP8)
            </li>

            <li class="diagram__down-item">
                <span>{{ $t('main[3][5]') }} {{ percentage(down).toFixed(0) }}%</span>
                {{ down }} VOTE(BEP8)
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            up: Number,
            down: Number,
        },
        computed: {
            gridStyle() {
                return {
                    gridTemplateColumns: `${this.up || 1}fr ${this.down || 1}fr`,
                }
            },
            // getUpData() {
            //     return this.dex.data.B.find(e => e.a == 'VOTE-692M').f
            // },
            // getDownData() {
            //     return this.voteDown.data.B.find(e => e.a == 'VOTE-692M').f
            // },
        },
        methods: {
            percentage(val) {
                return (val / (this.up + this.down)) * 100 || 0
            },
        },
    }
</script>

<style lang="scss" scoped>
    .diagram {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 0.5em 0 0;
        transition: all 1s ease-in-out;

        &__items {
            display: grid;
            grid-template-columns: 1fr 1fr;

            @media (max-width: 768px) {
                grid-template-columns: 1fr;
                margin: 0 0 2em;
            }
        }

        &__up {
            border-top: 6px solid #27ae60;
            padding: 0;

            &::after {
                content: '';
                border-right: 1px dotted;
                top: -12px;
                right: 0;
                height: 20px;
                position: absolute;
            }

            &-item {
                span {
                    position: relative;
                    padding-right: 2em;

                    &::before {
                        content: '';
                        width: 6px;
                        height: 6px;
                        background-color: #27ae60;
                        position: absolute;
                        top: 10px;
                        border-radius: 50px;
                        left: 0;
                    }
                }
            }
        }

        &__down {
            border-top: 6px solid #eb5757;
            padding-right: 0;

            &-item {
                span {
                    position: relative;
                    &::before {
                        content: '';
                        width: 6px;
                        height: 6px;
                        background-color: #eb5757;
                        position: absolute;
                        top: 10px;
                        border-radius: 50px;
                        left: 0;
                    }
                }
            }
        }
    }

    ul {
        padding: 0;
        li {
            align-content: flex-start;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            list-style: none;
            padding: 0.5em 1em 0 0;
            position: relative;

            span {
                padding-left: 1em;
            }
        }
    }
</style>
