<template>
    <nav class="nav">
        <nav-brand />

        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="nav-menu"
            v-on:click="toggle = !toggle"
            :aria-pressed="toggle ? 'true' : 'false'"
        >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>

        <ul class="nav-items" :class="{ active: toggle }">
            <li class="nav-items__item">
                <router-link active-class="active" class="nav-items__item-link" to="/current">{{ $t('navbar[0][0]') }}</router-link>
            </li>

            <li class="nav-items__item">
                <router-link active-class="active" class="nav-items__item-link" to="/completed">{{ $t('navbar[0][1]') }}</router-link>
            </li>

            <li class="nav-items__item">
                <router-link active-class="active" class="nav-items__item-link" to="/topic">{{ $t('navbar[0][2]') }}</router-link>
            </li>

            <ul class="nav-items__item">
                <li class="nav-items__item-locale">
                    <span class="nav-items__item-link" v-on:click="active = !active" :aria-pressed="active ? 'true' : 'false'">{{
                        $i18n.locale
                    }}</span>
                </li>
                <ul class="nav-items__item-sub" v-if="active">
                    <li
                        v-for="l in locales"
                        v-bind:key="l.id"
                        v-on:click="sessionLocale(l), ($i18n.locale = l), (active = !active)"
                        v-text="l"
                        class="nav-items__item-sub-link"
                    />
                </ul>
            </ul>
        </ul>
    </nav>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        data() {
            return {
                active: false,
                toggle: false,
            }
        },

        computed: {
            locales: self => self.$i18n.availableLocales.filter(l => l !== self.$i18n.locale),
        },

        methods: {
            ...mapActions('Session', ['sessionLocale']),
        },
    }
</script>

<style lang="scss" scoped>
    .nav {
        display: flex;
        justify-content: space-between;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        &-menu {
            cursor: pointer;

            display: none;
            margin: 2em auto 1em;

            @media (max-width: 768px) {
                display: block;
            }
        }

        &-items {
            display: flex;

            @media (max-width: 768px) {
                display: none;
                flex-direction: column;
            }

            &__item {
                margin: 0.5em 1em;

                &-link {
                    cursor: pointer;

                    &:hover {
                        color: #007dff;
                    }
                }

                &-locale {
                    margin-left: 1em;
                    position: relative;
                    text-transform: capitalize;

                    @media (max-width: 768px) {
                        margin: 0;

                        &::before {
                            left: 2em !important;
                            position: absolute;
                        }
                    }

                    &::before {
                        content: '\e904';
                        font-family: 'icomoon';

                        left: -1.5em;
                        position: absolute;
                    }
                }

                &-sub {
                    margin-left: 1em;
                    position: absolute;

                    @media (max-width: 768px) {
                        margin: 0;
                        position: relative;
                    }

                    &-link {
                        cursor: pointer;
                        margin: 8px 0;
                        text-transform: capitalize;

                        &:hover {
                            color: #007dff;
                        }
                    }
                }
            }
        }
    }
    .active {
        display: inherit;
    }
</style>
