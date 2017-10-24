const assert = require('assert')

const wasmAvailable = (typeof WebAssembly !== 'undefined')

assert(wasmAvailable, 'The `WebAssembly` object is unavailable.')
