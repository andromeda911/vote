<template>
    <div>
        <!-- {{ $t('main[3][2]') }} -->
        <!-- {{ $t('main[2][1]') }} -->

        <ul class="diagram__header">
            <li>Votes</li>
            <li>20 000</li>
            <li>MAX</li>
        </ul>

        <ul class="diagram">
            <li class="diagram__up" :style="gridStyle"></li>
        </ul>

        <ul class="diagram__items">
            <li class="diagram__up-item">
                <!-- <span>{{ $t('main[3][4]') }} {{ percentage(up).toFixed(1) }} %</span> -->
                {{ up }} VOTE(BEP8)
            </li>

            <!-- <li class="diagram__down-item">
                <span>{{ $t('main[3][5]') }} {{ percentage(down).toFixed(0) }}%</span>
                {{ down }} VOTE(BEP8)
            </li> -->
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
                    width: `${this.percentage(this.up).toFixed(1) || 1}%`,
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
                return (val / this.down) * 100 || 0
            },
        },
    }
</script>

<style lang="scss" scoped>
    .diagram {
        background-color: #eeeeee;
        margin: 1em 0 0;
        transition: all 2s ease-in-out;

        &__header {
            display: flex;
            justify-content: space-between;

            li {
                padding: 0;
                position: relative;

                &:nth-child(2) {
                    &::after {
                        content: '';
                        border-left: 1px dotted;
                        position: absolute;
                        top: 36px;
                        height: 20px;
                        z-index: 1;
                        right: 50%;
                        transform: translateX(50%);
                    }
                }
            }
        }

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

            // &::after {
            //     content: '';
            //     border-right: 1px dotted;
            //     top: -12px;
            //     right: 0;
            //     height: 20px;
            //     position: absolute;
            // }

            &-item {
                margin: 0.6em 0;
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
