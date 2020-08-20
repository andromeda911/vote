<template>
    <transition name="modal">
        <div class="modal__mask" v-on:click="close">
            <div class="modal__container">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
    import { bus } from '@/main.js'

    export default {
        methods: {
            close() {
                bus.$emit('close', true)
            },
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .modal {
        &__mask {
            background: hsla(0, 0%, 0%, 0.6);

            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            width: 100vw;
            position: fixed;
            left: 0;
            bottom: 0;

            transform: translateY(0%);
            transition: opacity 0.3s ease;

            z-index: 9998;
        }
        &__container {
            background-color: #ffffff;
            max-width: 280px !important;
            padding: 1em;
            display: flex;
            flex-direction: column;

            transition: all 0.3s ease;
            width: 100%;

            figure {
                position: relative;
            }

            canvas {
                margin: auto;
                display: block;
            }
            p {
                margin: 10px 0 0;
            }
            .address {
                word-break: break-all;
            }
            svg {
                cursor: pointer;
                margin: 1em auto 0;
                text-align: center;

                &:hover {
                    color: #007dff;
                }
            }
            .copy {
                text-align: center;
            }
        }
    }

    /*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }
</style>
