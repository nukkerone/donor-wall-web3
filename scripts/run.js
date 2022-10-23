const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const courseContractFactory = await hre.ethers.getContractFactory("CoursePortal");
  const courseContract = await courseContractFactory.deploy();
  await courseContract.deployed();

  console.log("Contract deployed to:", courseContract.address);
  console.log("Contract deployed by:", owner.address);

  await courseContract.getTotalSignedUp();

  const courseTxn = await courseContract.signUp();
  await courseTxn.wait(); // wait until the transaction is mined

  const courseTxn2 = await courseContract.connect(randomPerson).signUp();
  await courseTxn2.wait(); // wait until the transaction is mined

  await courseContract.getTotalSignedUp();

};

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