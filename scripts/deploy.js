
const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const CoursePortalFactory = await hre.ethers.getContractFactory("CoursePortal");
  const coursePortal = await CoursePortalFactory.deploy();
  await coursePortal.deployed();

  console.log("Contract deployed to:", coursePortal.address);
  console.log("Contract deployed by:", deployer.address);
  console.log("Owner balance:", (await deployer.getBalance()).toString());
}

const runMain = async () => {
  try {
    await main();
    process.exit(0); // exit Node process without error
  } catch (error) {
    console.log(error);
    process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
  }
  // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
};

runMain();