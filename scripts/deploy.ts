import { ethers } from "hardhat";

async function main() {

  const cbdc_escrow = await ethers.deployContract("CBDCEscrow");

  await cbdc_escrow.waitForDeployment();

  console.log("CBDC_Escrow deployed to : ",await cbdc_escrow.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
