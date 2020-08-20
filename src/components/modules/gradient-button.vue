<template>
    <router-link class="button" tag="button" :to="'/' + url">
        <span class="button__text">{{ text }}</span>
    </router-link>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: 'Button',
            },
            url: {
                type: String,
                default: null,
            },
        },
    }
</script>

<style lang="scss" scoped>
    .button {
        color: #fff;
        border: none;
        border-radius: 5px;
        box-shadow: none;

        margin: 1em 0 0;

        cursor: pointer;

        font: inherit;
        font-size: 18px;

        padding: 12px 30px;
        position: relative;
        background: linear-gradient(90deg, rgba(0, 198, 255, 1) 0%, rgba(0, 114, 255, 1) 100%);
        z-index: 1;

        -webkit-backface-visibility: hidden;

        @media (max-width: 768px) {
            align-self: center;
        }

        &::after {
            content: '';
            background: linear-gradient(90deg, rgba(0, 114, 255, 1) 0%, rgba(0, 198, 255, 1) 100%);
            border-radius: 5px;
            left: 0;
            height: 100%;
            opacity: 0;
            position: absolute;
            top: 0;
            transition: opacity 0.5s ease-out;
            width: 100%;
            z-index: 2;
        }

        &:hover:after {
            opacity: 1;
        }

        &__text {
            position: relative;
            z-index: 3;
        }
    }
</style>
