<template>
    <section>
        <main-slogan :title="'Suggest topic'" :text="'Coming soon..'" />
    </section>
</template>

<script>
    export default {
        data() {
            return {
                votes: [
                    {
                        userId: 1423,
                        id: 1,
                        title: 'Do you want TBCC Wallet to relise terminal for trading on Binance Dex?',
                    },
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
    section {
        div {
            margin: 2em auto;
            max-width: 1280px;
            padding: 1em;
            width: 100%;
        }
    }
</style>
