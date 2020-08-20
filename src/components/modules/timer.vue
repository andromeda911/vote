<template>
    <div>
        <ul class="text-center" v-if="currentTime">
            <li v-if="days">{{ days }}<i>:</i><span>Days</span></li>
            <li v-if="hours">{{ hours | formatTime }}<i>:</i><span>Hours</span></li>
            <li>{{ minutes | formatTime }}<i>:</i><span>Minutes</span></li>
            <li>{{ seconds | formatTime }}<span>Seconds</span></li>
        </ul>
        <div class="text-center" v-if="!currentTime">
            Time's Up!
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            deadline: {
                type: String,
                required: true,
            },
            speed: {
                type: Number,
                default: 1000,
            },
        },
        data() {
            return {
                currentTime: Date.parse(this.deadline) - Date.parse(new Date()),
            }
        },
        mounted() {
            setTimeout(this.countdown, 1000)
        },
        computed: {
            seconds() {
                return Math.floor((this.currentTime / 1000) % 60)
            },
            minutes() {
                return Math.floor((this.currentTime / 1000 / 60) % 60)
            },
            hours() {
                return Math.floor((this.currentTime / (1000 * 60 * 60)) % 24)
            },
            days() {
                return Math.floor(this.currentTime / (1000 * 60 * 60 * 24))
            },
        },
        filters: {
            formatTime(value) {
                if (value < 10) {
                    return '0' + value
                }
                return value
            },
        },
        methods: {
            countdown() {
                this.currentTime = Date.parse(this.deadline) - Date.parse(new Date())
                if (this.currentTime > 0) {
                    setTimeout(this.countdown, this.speed)
                } else {
                    this.currentTime = null
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        li {
            color: #0072ff;
            display: flex;
            flex-wrap: wrap;
            font-size: 96px;
            line-height: initial;
            justify-content: center;
            padding: 0 20px;
            position: relative;

            @media (max-width: 768px) {
                font-size: 36px;
                padding: 0;
            }

            &::after {
                color: initial;
                content: ':';
                position: absolute;
                left: -6px;
                top: 2px;
                font-size: 82px;

                @media (max-width: 768px) {
                    font-size: 28px;
                    left: -4px;
                }
            }

            &:first-child {
                padding-left: 0;
                &::after {
                    content: none;
                }
            }

            &:last-child {
                padding-right: 0;
            }

            i {
                color: initial;
                font-style: normal;
                margin: -10px 0px 0px 30px;
                display: none;
            }

            span {
                flex: 100%;
                color: initial;
                font-size: initial;

                @media (max-width: 768px) {
                    font-size: 14px;
                }
            }
        }
    }
</style>
