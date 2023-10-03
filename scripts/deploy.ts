import { ethers } from "hardhat";

const tokenAddress = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199";

async function main() {

  const cbdc_escrow = await ethers.deployContract("CBDCEscrow", [tokenAddress]);

  await cbdc_escrow.waitForDeployment();

  console.log("CBDC_Escrow deployed to : ",await cbdc_escrow.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
