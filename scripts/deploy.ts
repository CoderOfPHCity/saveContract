import { ethers } from "hardhat";

async function main() {


  const lockedAmount = ethers.parseEther("0.001");

  const lock = await ethers.deployContract("SaveEther",);

  await lock.waitForDeployment();

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
