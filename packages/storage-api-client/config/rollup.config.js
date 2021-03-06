import buble from 'rollup-plugin-buble'
import replace from 'rollup-plugin-replace'
import fs from 'fs'

const pkg = require('../package')

const rushaString = fs.readFileSync(require.resolve('rusha/rusha.min.js', 'utf-8')).toString().replace(/[\r\n]/g, '')

export default (config) => {
  return {
    entry: config.browser ? 'browser.js' : 'index.js',
    format: config.format,
    moduleName: 'storage-api-client',
    dest: config.dest,
    plugins: [
      buble(),
      replace({ '#{RUSHA}': rushaString })
    ],
    external: Object.keys(pkg.dependencies).concat(['fs', 'crypto'])
  }
}
