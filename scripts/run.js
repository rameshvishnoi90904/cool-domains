const main = async () => {

    const [owner, superCoder] = await hre.ethers.getSigners();
    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    const domainContract = await domainContractFactory.deploy("ninja");
    await domainContract.deployed();
    console.log("Contract deployed to:", domainContract.address);

    // We're passing in a second variable - value. This is the moneyyyyyyyyyy
    let txn = await domainContract.register("mortal",  {value: hre.ethers.utils.parseEther('0.1')});
    await txn.wait();


    txn = await domainContract.register("mortal700",  {value: hre.ethers.utils.parseEther('0.1')});
    await txn.wait();

    txn = await domainContract.getAllNames();
    
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();