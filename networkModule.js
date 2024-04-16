const os = require('os')
const arrayEntries = Object.entries(os.networkInterfaces())
const arr = []
const networkInfo = []
for(let i = 0; i < arrayEntries.length; i++){
     arr.push([`Interfaz ${arrayEntries[i][0]}:`])
   
    for(let j = 0; j< arrayEntries[i][1].length; j++){
        arr[i].push(`Familia: ${arrayEntries[i][1][j].family}`)
        arr[i].push(`Dirección: ${arrayEntries[i][1][j].address}`)
        arr[i].push(`Interno: ${arrayEntries[i][1][j].internal}`)
    }
}
for(i = 0; i < arr.length; i++){
    networkInfo.push(arr[i].join(' '))
}

module.exports = networkInfo

