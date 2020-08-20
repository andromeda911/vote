<template>
    <div class="slogan">
        <p class="slogan__body">
            {{ text }}
        </p>

        <gradient-button v-if="buttonText" :text="buttonText" />
    </div>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ullam provident commodi repellendus deleniti nemo. Natus quam optio, accusamus est, voluptate impedit minus a iure repellendus debitis sed asperiores exercitationem?',
            },
            buttonText: {
                type: String,
                default: '',
            },
        },
    }
</script>

<style lang="scss" scoped>
    .slogan {
        background: url('../../assets/frame.svg') center,
            linear-gradient(180deg, rgba(255, 255, 255, 1) 20%, rgba(245, 245, 245, 0.8) 37%, rgba(255, 255, 255, 1) 100%);
        background-size: 116%;
        display: inline-grid;
        margin: 4em 0;
        max-width: 100%;
        width: 100%;

        @media (max-width: 992px) {
            margin: 0;
        }

        @media (max-width: 768px) {
            margin: 0;
        }

        &__body {
            font-size: 20px;
            font-weight: 500;
            padding: 2em 0;
            margin: 0 auto;
            max-width: 572px;
            text-align: center;
            padding: 4em 0;
            display: block;

            @media (max-width: 768px) {
                font-size: 18px;
            }
        }

        button {
            margin: 0 auto;
        }
    }
</style>
