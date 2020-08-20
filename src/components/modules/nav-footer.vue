<template>
    <nav class="nav">
        <ul class="nav-items">
            <span>Follow Us</span>
            <nav-social class="nav-items__item" />
            <li class="nav-items__item-copyright">
                © 2018-2020 TBCC Inc. All rights reserved
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    .nav {
        margin: 4em 0 0;

        &-items {
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            font-weight: 500;
            justify-content: space-between;

            @media (max-width: 768px) {
                flex-direction: column;
                text-align: center;
            }

            span {
                flex: 100%;
            }

            &__item {
                flex: auto;
                font-weight: normal;
                margin: 0.5em 0;

                &-link {
                    cursor: pointer;

                    &:hover {
                        color: #007dff;
                    }
                }

                &-copyright {
                    font-weight: 500;
                    margin: 0 0 0 auto;

                    @media (max-width: 768px) {
                        margin: 2em auto 1em;
                    }
                }
            }
        }
    }
</style>
