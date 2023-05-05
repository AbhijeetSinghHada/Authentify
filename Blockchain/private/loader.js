const fs = require('fs')
var bytecode = "0x" + fs.readFileSync("./build/ProductRegistry.bin").toString()
var abi = JSON.parse(fs.readFileSync("./build/ProductRegistry.abi"))
