import config from './rollup.config'

export default config({
  format: 'cjs',
  dest: 'dist/storage-api-client.browser.cjs.js',
  browser: true
})
