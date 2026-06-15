const NHSPrototypeKit = require('nhsuk-prototype-kit')

// Local dependencies
const config = require('./app/config')
const sessionDataDefaults = require('./app/data/session-data-defaults')
const filters = require('./app/filters')
const globals = require('./app/globals')
const locals = require('./app/locals')

const viewsPath = [
  'app/views/',
  'node_modules/nhsapp-frontend/dist/'
]

const entryPoints = [
  'app/assets/sass/main.scss',
  'app/assets/javascript/*.js'
]

async function init() {
  const prototype = await NHSPrototypeKit.init({
    serviceName: config.serviceName,
    buildOptions: {
      // Use a filesystem path for the alias so esbuild can resolve it at build
      // time. A URL path (/assets/...) is only valid at runtime in the browser
      // and would silently fall back to resolving jquery from node_modules.
      alias: { jquery: './app/assets/javascript/jquery-4.0.0.min.js' },
      entryPoints
    },
    viewsPath,
    locals,
    filters,
    sessionDataDefaults
  })

  for (const [name, global] of Object.entries(globals(prototype.nunjucks))) {
    prototype.nunjucks?.addGlobal(name, global)
  }

  prototype.start(config.port)
}

init()
