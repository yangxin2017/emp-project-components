const empRemoteMd5 = require('@efox/emp-remote-md5')

module.exports = async env => {
  const configMap = {
    dev: `./mf-development.js`,
    test: `./mf-development.js`,
    prod: `./mf-production.js`,
  }
  const config = require(configMap[env])
  return await empRemoteMd5(config)
}
