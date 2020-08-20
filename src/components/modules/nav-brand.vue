<template>
    <figure>
        <router-link tag="svg" to="/" fill="none" width="70" viewBox="0 0 36 30">
            <defs />
            <path
                fill="url(#paint0_linear)"
                d="M18.0116 30L0 19.7332V0l9.27238 5.28201v9.16919l8.73922 4.9848 8.716-4.9619V5.30488L36 .0228659V19.7561L18.0116 30z"
            />
            <path
                fill="url(#paint1_linear)"
                d="M11.7296 5.92227v7.13413l6.2588 3.5671 6.282-3.5671V5.92227l-6.282-3.56708-6.2588 3.56708z"
            />
            <defs>
                <linearGradient id="paint0_linear" x1="35.9305" x2=".233165" y1="-.00000202" y2="20.0792" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00C6FF" />
                    <stop offset="1" stop-color="#0072FF" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="35.9305" x2=".233165" y1="-.00000202" y2="20.0792" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00C6FF" />
                    <stop offset="1" stop-color="#0072FF" />
                </linearGradient>
            </defs>
        </router-link>

        <figcaption>TBCC Vote <span>VOTE (Bep8)</span></figcaption>
    </figure>
</template>

<style lang="scss" scoped>
    figure {
        display: flex;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            text-align: center;

            svg {
                padding: 0 !important;
            }
        }

        svg {
            cursor: pointer;
            padding-right: 1em;

            &:hover {
                opacity: 0.6;
            }
        }

        figcaption {
            font-size: 20px;
            font-weight: 500;
            letter-spacing: 0.15px;
            line-height: 1.425;

            span {
                display: block;
                font-size: 12px;
            }
        }
    }
</style>
