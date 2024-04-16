const os = require('os')
const userInfo = os.userInfo()
const userName = userInfo.username
const tipo = os.type()
const version = os.version()
const arquitectura = os.arch()
const cpu = os.cpus().length
const memoriaLibre = ((os.freemem() / 1024) / 1024)
const memoriaTotal = ((os.totalmem() /1024) / 1024)
const osInfo = `Nombre: ${userName} Tipo: ${tipo} Version: ${version} Arquitectura: ${arquitectura} CPUs: ${cpu} Memoria Total: ${memoriaTotal} MB Memoria Libre: ${memoriaLibre} MB`
module.exports = osInfo