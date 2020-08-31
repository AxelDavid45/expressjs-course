'use strict'
const { readFile } = require('fs')

function getKeysFromOptions (options) {
  const { settings, _locals, ...objectKeys } = options
  return Object.keys(objectKeys)
}

function getRenderedContent (content, options) {
  const keys = getKeysFromOptions(options)
  // Convert the Buffer to string
  let contentString = content.toString()
  for (let key of keys) {
    contentString = contentString.replace(
      new RegExp(`\{${key}\}`, 'gi'),
      options[key]
    )
  }
  return contentString
}

function expressJsx (filepath, options, callback) {
  readFile(filepath, (err, content) => {
    if (err) {
      return callback(err)
    }
    const rendered = getRenderedContent(content, options)
    return callback(null, rendered)
  })
}

module.exports = expressJsx
