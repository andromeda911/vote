<template>
    <div>
        <ul class="diagram__header">
            <li v-text="`Votes`" />
            <li v-text="down / 2" />
            <li v-text="`MAX`" />
        </ul>

        <ul class="diagram">
            <li class="diagram__up" :style="gridStyle" />
        </ul>

        <ul class="diagram__items">
            <li class="diagram__up-item">{{ up }} VOTE(BEP8)</li>
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
