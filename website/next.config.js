const path = require('path')
const compose = require('compose-function')
const transpile = require('next-transpile-modules')([
    'dashboard-blocks',
    'landing-blocks',
])
const { withDokz } = require('dokz/dist/plugin')
const withImages = require('next-images')
const withReactSvg = require('next-react-svg')

const composed = compose(withReactSvg, transpile, withDokz, )

module.exports = composed({
    include: path.resolve(__dirname, 'public/'),
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
})
