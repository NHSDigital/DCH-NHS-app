const { get: getKeypath } = require('lodash')

module.exports = function (env) {
  const globals = {};

  globals.checked = function (name, value) {
    // Check data exists
    if (this.ctx.data === undefined) {
      return ''
    }

    // Use string keys or object notation to support:
    // checked("field-name")
    // checked("['field-name']")
    // checked("['parent']['field-name']")
    const matchedName = !name.match(/[.[]/g) ? `['${name}']` : name
    const storedValue = getKeypath(this.ctx.data, matchedName)

    // Check the requested data exists
    if (storedValue === undefined) {
      return ''
    }

    let checked = ''

    // If data is an array, check it exists in the array
    if (Array.isArray(storedValue)) {
      if (storedValue.indexOf(value) !== -1) {
        checked = 'checked'
      }
    } else if (storedValue === value) {
      // The data is just a simple value, check it matches
      checked = 'checked'
    }
    return checked
  }

  return globals;
};
