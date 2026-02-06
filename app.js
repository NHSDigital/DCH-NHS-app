const NHSPrototypeKit = require('nhsuk-prototype-kit')

// Local dependencies
const config = require('./app/config')
const sessionDataDefaults = require('./app/data/session-data-defaults')
const filters = require('./app/filters')
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
      alias: { jquery: '/assets/javascript/jquery-4.0.0.min.js' },
      entryPoints
    },
    viewsPath,
    locals,
    filters,
    sessionDataDefaults
  })

  prototype.start(config.port)
}

init()
