const hre = require("hardhat");

async function main() {
  const TestToken = await hre.ethers.getContractFactory("kokotoken");
  const testToken = await TestToken.deploy(420690000000000, 10);

  await testToken.waitForDeployment();

  console.log("Test Token deployed: ", testToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});