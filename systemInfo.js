const osInfo = require('./osModule')
const networkInfo = require('./networkModule')
console.log(osInfo)
for(i = 0; i < networkInfo.length; i++){
    console.log(networkInfo[i])
}

