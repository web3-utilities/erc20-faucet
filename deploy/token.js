const { network } = require('hardhat');

module.exports = async ({ deployments, getNamedAccounts }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    console.log(`${deployer} in ${network.name}`)

    const name = 'FTB';
    await deploy(name, {
        contract: 'Token',
        from: deployer,
        log: true,
        args: ['Faucet ERC20 Token', name, 18]
    })
}

module.exports.tags = ['Token']