usePlugin("@nomiclabs/buidler-waffle");
usePlugin("solidity-coverage");

// This is a sample Buidler task. To learn how to create your own go to
// https://buidler.dev/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.getAddress());
  }
});

usePlugin("@nomiclabs/buidler-truffle5");

// You have to export an object to set up your config
// This object can have the following optional entries:
// defaultNetwork, networks, solc, and paths.
// Go to https://buidler.dev/config/ to learn more
module.exports = {
  // This is a sample solc configuration that specifies which version of solc to use
  solc: {
    version: "0.5.16",
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  mocha: {
    timeout: 40000
  },
  networks: {
    buidlerevm: {
    },
    development: {
      url: "https://traces-api.testnet.veladev.net/bridges",
      port: 7545,
      network_id: "101"
    },
    mainnet: {
      url: "https://wag.mainnet.veladev.net/rpc",
      port: 443,
      network_id: "106",
      accounts: ["0x4e63ba41a12882d41cabd49153b55a6a3ae0b3cd5a90d6138d0262b574588676"]
    },
    test: {
      url: "http://127.0.0.1:7545",
      port: 7545,
      network_id: "*"
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};
