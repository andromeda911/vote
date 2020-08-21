<template>
    <div class="vote-example">
        <ul class="vote-example__items">
            <li class="vote-example__items-item">
                {{ $t('main[2][0]') }}
                <span>{{ $t('main[2][1]') }}</span>
            </li>

            <li class="vote-example__items-item">
                <figure>
                    <img src="../../assets/device_votes.png" alt="" />
                </figure>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    .vote-example {
        &__items {
            align-items: center;
            display: flex;
            font-size: 20px;
            justify-content: space-between;
            padding: 0;

            @media (max-width: 768px) {
                font-size: 18px;
                flex-direction: column;
                text-align: center;
            }

            &-item {
                list-style: none;

                &:first-child {
                    max-width: 522px;
                }

                &:last-child {
                    @media (max-width: 768px) {
                        display: none;
                    }
                }

                span {
                    display: block;
                    font-weight: 500;
                    margin-top: 1em;
                }
            }
        }
    }
</style>
