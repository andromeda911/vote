<template>
    <transition name="modal">
        <!-- <div class="modal__mask" v-on:click="close"> -->
        <div class="modal__mask">
            <div class="modal__container">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {}
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
            position: relative;

            i {
                cursor: pointer;
                font-size: 24px;
                right: 10px;
                top: 15px;
                position: absolute;
            }

            canvas {
                margin: auto;
                display: block;
            }

            h4 {
                font-weight: normal;
                margin: 1em 0 0;
            }

            p {
                font-size: 15px;
                margin: 10px 0 0;
            }

            b {
                font-weight: 500;
                margin: 0 0 1em;
            }

            small {
                margin: 1em 0 0;
                opacity: 0.6;
            }

            address {
                cursor: pointer;
                font-style: normal;
                font-weight: 500;
                margin: 1em 0 0;
                word-break: break-all;

                small {
                    display: block;
                    opacity: 0.6;
                }
                &:hover {
                    small {
                        color: #007dff;
                    }
                }
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
