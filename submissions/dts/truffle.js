module.exports = {
  networks: {
    localhost: {
      host: "localhost", 
      port: 8546,
      network_id: "*" 
    },  
    development: {
      host: "0.0.0.0", 
      port: 8546,
      network_id: "*" // Match any network id
    }, 
    ropsten: {
      host: "0.0.0.0",
      port: 8545,
      network_id: "3" // Match any network id
    }
  }
};
