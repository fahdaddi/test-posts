/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
    theme: {
        extend: {
            fontFamily: {
                body: ['Helvetica']
            },
            inset: {
                '16': '4rem'
            },
            colors: {
                white: {
                    default: '#f2f2f2',
                    100: '#FEFEFE',
                    200: '#FCFCFC',
                    300: '#FAFAFA',
                    400: '#F6F6F6',
                    500: '#F2F2F2',
                    600: '#DADADA',
                    700: '#919191',
                    800: '#6D6D6D',
                    900: '#494949',
                },
                background: {
                    default: '#eee2dc',
                    100: '#FDFCFC',
                    200: '#FBF8F6',
                    300: '#F8F3F1',
                    400: '#F3EBE7',
                    500: '#EEE2DC',
                    600: '#D6CBC6',
                    700: '#8F8884',
                    800: '#6B6663',
                    900: '#474442',
                },
                navbar: {
                    default: '#edc7b7'
                },
                dark: {
                    default: '#bab2b5'
                },
                primary: {
                    default: '#123c69'
                }
            },

            height: {
                100: '25rem'
            },
            width: {
                100: '25rem',
                160: '40rem'
            },
            minWidth: {
                100: '25rem',
                32: '8rem'
            },
            maxWidth: {
                32: '8rem'
            },
            rotate: {
                '_2': '-2deg',
                '30': '30deg',
            },
            zIndex: {
                'modal': 9999999
            }
        },
    },
    variants: {},
    plugins: [],
}