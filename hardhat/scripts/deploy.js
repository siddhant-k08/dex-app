const hre = require("hardhat");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve,ms));
}

async function main(){
  // Deploy the Token contract
  const tokenContract = await hre.ethers.deployContract("Token");
  await tokenContract.waitForDeployment();
  console.log("Token deployed to:",tokenContract.target);

  // Deploy the Exchange Contact
  const exchangeContract = await hre.ethers.deployContract("Exchange",[
    tokenContract.target,
  ]);
  await exchangeContract.waitForDeployment();
  console.log("Exchange deployed to:",exchangeContract.target);

  // Wait for 30 seconds to let Etherscan catch up on contract deployments
  await sleep(30 * 1000);

  // Verify the contracts on Etherscan
  await hre.run("verify:verify", {
    address: tokenContract.target,
    constructorArguments: [],
    contract: "contracts/Token.sol:Token",
  });

  await hre.run("verify:verify",{
    address: exchangeContract.target,
    constructorArguments: [tokenContract.target],
  });
}

// We recomment this pattern to be able to use async/await everywhere
// and properly handle errors
main().catch((error)=>{
  console.log(error);
  process.exitCode = 1;
});