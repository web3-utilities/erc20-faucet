const { network } = require('hardhat');

module.exports = async ({ deployments, getNamedAccounts }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    console.log(`${deployer} in ${network.name}`)

    const name = 'USDT';
    await deploy(name, {
        contract: 'Token',
        from: deployer,
        log: true,
        args: ['Tether USD', name, 6]
    })
}

module.exports.tags = ['Token']