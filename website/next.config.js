const compose = require('compose-function')
const transpile = require('next-transpile-modules')(['dashboard-blocks', 'landing-blocks'])
const { withDokz } = require('dokz/dist/plugin')

const composed = compose(transpile, withDokz)

module.exports = composed({
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
})
