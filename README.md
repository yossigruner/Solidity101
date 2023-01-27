
# Solidity 101

## Installation
  
```
npm install
```
 
### Update .env file

```
cp .env.example
```

## Compile

```
npx hardhat compile
```  

## Deploy

```
npx hardhat run scripts/deploy-HelloWorld.ts --network goerli
npx hardhat run scripts/deploy-UnityERC20.ts --network goerli
npx hardhat run scripts/deploy-UnityERC721.ts --network goerli
```

## Verify
  
```
npx hardhat verify --contract contracts/HelloWorld.sol:HelloWorld --network goerli <ADDRESS>
npx hardhat verify --contract contracts/UnityERC20.sol:UnityERC20 --network goerli 0x266b108923dE5866E1970CebF72FdA7455f9138e
npx hardhat verify --contract contracts/UnityERC721.sol:UnityERC721 --network goerli 0xDA492B0932875A80f6D808A704A9691700c98FF5
```