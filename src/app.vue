<template>
    <body id="app">
        <header>
            <nav-header />
        </header>

        <main>
            <router-view />
        </main>

        <footer>
            <nav-footer />
        </footer>
        <!-- use the modal component, pass in the prop -->
        <modal v-if="modal">
            <qrcode :value="modalData.token" :options="{ width: 240, margin: 0 }"></qrcode>
            <h4>{{ $t('main[8][0]') }}</h4>

            <address v-clipboard="modalData.token">
                {{ modalData.token }} <small>{{ $t('main[8][1]') }}</small>
            </address>
        </modal>
    </body>
</template>

<script>
    import { bus } from '@/main.js'

    export default {
        data() {
            return {
                modal: false,
                modalData: [],
            }
        },
        created() {
            bus.$on('setModal', data => {
                this.modal = !this.modal
                this.modalData = data
            })
            bus.$on('close', data => {
                this.modal = !this.modal
            })
        },
    }
</script>

<style lang="scss">
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
    }

    body {
        font-family: 'Gilroy', Avenir, Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 1.625;
        color: #2c3e50;
        display: grid;
        grid-gap: 1em;
        justify-items: center;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    header {
        max-width: 1280px;
        padding: 2em 1em 0;
        width: 100%;
    }

    main {
        width: 100%;
    }

    footer {
        max-width: 1280px;
        padding: 1em;
        width: 100%;
    }

    a {
        color: inherit;
        text-decoration: none;
        transition: all 0.1s ease;

        &.active {
            color: #007dff;
            text-decoration: underline;
            opacity: 1;
        }
    }

    ul,
    li {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    img {
        display: inline-block;
        width: 100%;
    }

    @keyframes appear {
        0% {
            opacity: 0;
        }
    }

    pre {
        white-space: pre-wrap;
    }
</style>
