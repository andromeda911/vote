<template>
    <nav class="nav">
        <nav-brand />

        <ul class="nav-items">
            <li class="nav-items__item">
                <router-link active-class="active" class="nav-items__item-link" to="/vote-list">Current voting</router-link>
            </li>

            <li class="nav-items__item">
                <router-link active-class="active" class="nav-items__item-link" to="/completed">Completed voting</router-link>
            </li>

            <li class="nav-items__item">
                <router-link active-class="active" class="nav-items__item-link" to="/topic">Suggest topic</router-link>
            </li>

            <ul class="nav-items__item">
                <li class="nav-items__item-locale">
                    <span class="nav-items__item-link" v-on:click="active = !active" :aria-pressed="active ? 'true' : 'false'">En</span>
                </li>
                <ul class="nav-items__item-sub" v-if="active">
                    <li class="nav-items__item-sub-link">Ru</li>
                    <li class="nav-items__item-sub-link">Zh</li>
                </ul>
            </ul>
        </ul>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                active: false,
            }
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

        &-items {
            display: flex;

            @media (max-width: 768px) {
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

                        &:hover {
                            color: #007dff;
                        }
                    }
                }
            }
        }
    }
</style>
