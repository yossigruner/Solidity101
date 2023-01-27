/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  UnityERC20,
  UnityERC20Interface,
} from "../../contracts/UnityERC20";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280601481526020017f556e6974794141414142424243434345524332300000000000000000000000008152506040518060400160405280600381526020017f554e54000000000000000000000000000000000000000000000000000000000081525081600390805190602001906200009692919062000365565b508060049080519060200190620000af92919062000365565b505050620000d2620000c66200011660201b60201c565b6200011e60201b60201c565b6200011033620000e7620001e460201b60201c565b600a620000f59190620005af565b6103e862000104919062000600565b620001ed60201b60201c565b620007d4565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000260576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200025790620006c2565b60405180910390fd5b62000274600083836200035b60201b60201c565b8060026000828254620002889190620006e4565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200033b919062000752565b60405180910390a362000357600083836200036060201b60201c565b5050565b505050565b505050565b82805462000373906200079e565b90600052602060002090601f016020900481019282620003975760008555620003e3565b82601f10620003b257805160ff1916838001178555620003e3565b82800160010185558215620003e3579182015b82811115620003e2578251825591602001919060010190620003c5565b5b509050620003f29190620003f6565b5090565b5b8082111562000411576000816000905550600101620003f7565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b6001851115620004a3578086048111156200047b576200047a62000415565b5b60018516156200048b5780820291505b80810290506200049b8562000444565b94506200045b565b94509492505050565b600082620004be576001905062000591565b81620004ce576000905062000591565b8160018114620004e75760028114620004f25762000528565b600191505062000591565b60ff84111562000507576200050662000415565b5b8360020a91508482111562000521576200052062000415565b5b5062000591565b5060208310610133831016604e8410600b8410161715620005625782820a9050838111156200055c576200055b62000415565b5b62000591565b62000571848484600162000451565b925090508184048111156200058b576200058a62000415565b5b81810290505b9392505050565b6000819050919050565b600060ff82169050919050565b6000620005bc8262000598565b9150620005c983620005a2565b9250620005f87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620004ac565b905092915050565b60006200060d8262000598565b91506200061a8362000598565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161562000656576200065562000415565b5b828202905092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620006aa601f8362000661565b9150620006b78262000672565b602082019050919050565b60006020820190508181036000830152620006dd816200069b565b9050919050565b6000620006f18262000598565b9150620006fe8362000598565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000736576200073562000415565b5b828201905092915050565b6200074c8162000598565b82525050565b600060208201905062000769600083018462000741565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620007b757607f821691505b60208210811415620007ce57620007cd6200076f565b5b50919050565b61181280620007e46000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d714610276578063a9059cbb146102a6578063dd62ed3e146102d6578063f2fde38b14610306576100f5565b806370a0823114610200578063715018a6146102305780638da5cb5b1461023a57806395d89b4114610258576100f5565b806323b872dd116100d357806323b872dd14610166578063313ce5671461019657806339509351146101b457806340c10f19146101e4576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610322565b60405161010f9190610f38565b60405180910390f35b610132600480360381019061012d9190610ff3565b6103b4565b60405161013f919061104e565b60405180910390f35b6101506103d7565b60405161015d9190611078565b60405180910390f35b610180600480360381019061017b9190611093565b6103e1565b60405161018d919061104e565b60405180910390f35b61019e610410565b6040516101ab9190611102565b60405180910390f35b6101ce60048036038101906101c99190610ff3565b610419565b6040516101db919061104e565b60405180910390f35b6101fe60048036038101906101f99190610ff3565b610450565b005b61021a6004803603810190610215919061111d565b610466565b6040516102279190611078565b60405180910390f35b6102386104ae565b005b6102426104c2565b60405161024f9190611159565b60405180910390f35b6102606104ec565b60405161026d9190610f38565b60405180910390f35b610290600480360381019061028b9190610ff3565b61057e565b60405161029d919061104e565b60405180910390f35b6102c060048036038101906102bb9190610ff3565b6105f5565b6040516102cd919061104e565b60405180910390f35b6102f060048036038101906102eb9190611174565b610618565b6040516102fd9190611078565b60405180910390f35b610320600480360381019061031b919061111d565b61069f565b005b606060038054610331906111e3565b80601f016020809104026020016040519081016040528092919081815260200182805461035d906111e3565b80156103aa5780601f1061037f576101008083540402835291602001916103aa565b820191906000526020600020905b81548152906001019060200180831161038d57829003601f168201915b5050505050905090565b6000806103bf610723565b90506103cc81858561072b565b600191505092915050565b6000600254905090565b6000806103ec610723565b90506103f98582856108f6565b610404858585610982565b60019150509392505050565b60006012905090565b600080610424610723565b90506104458185856104368589610618565b6104409190611244565b61072b565b600191505092915050565b610458610bfa565b6104628282610c78565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6104b6610bfa565b6104c06000610dcf565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546104fb906111e3565b80601f0160208091040260200160405190810160405280929190818152602001828054610527906111e3565b80156105745780601f1061054957610100808354040283529160200191610574565b820191906000526020600020905b81548152906001019060200180831161055757829003601f168201915b5050505050905090565b600080610589610723565b905060006105978286610618565b9050838110156105dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d39061130c565b60405180910390fd5b6105e9828686840361072b565b60019250505092915050565b600080610600610723565b905061060d818585610982565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6106a7610bfa565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610717576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070e9061139e565b60405180910390fd5b61072081610dcf565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561079b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079290611430565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561080b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610802906114c2565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516108e99190611078565b60405180910390a3505050565b60006109028484610618565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461097c578181101561096e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109659061152e565b60405180910390fd5b61097b848484840361072b565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156109f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e9906115c0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a62576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5990611652565b60405180910390fd5b610a6d838383610e95565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610af3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aea906116e4565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610be19190611078565b60405180910390a3610bf4848484610e9a565b50505050565b610c02610723565b73ffffffffffffffffffffffffffffffffffffffff16610c206104c2565b73ffffffffffffffffffffffffffffffffffffffff1614610c76576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6d90611750565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ce8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cdf906117bc565b60405180910390fd5b610cf460008383610e95565b8060026000828254610d069190611244565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610db79190611078565b60405180910390a3610dcb60008383610e9a565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ed9578082015181840152602081019050610ebe565b83811115610ee8576000848401525b50505050565b6000601f19601f8301169050919050565b6000610f0a82610e9f565b610f148185610eaa565b9350610f24818560208601610ebb565b610f2d81610eee565b840191505092915050565b60006020820190508181036000830152610f528184610eff565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f8a82610f5f565b9050919050565b610f9a81610f7f565b8114610fa557600080fd5b50565b600081359050610fb781610f91565b92915050565b6000819050919050565b610fd081610fbd565b8114610fdb57600080fd5b50565b600081359050610fed81610fc7565b92915050565b6000806040838503121561100a57611009610f5a565b5b600061101885828601610fa8565b925050602061102985828601610fde565b9150509250929050565b60008115159050919050565b61104881611033565b82525050565b6000602082019050611063600083018461103f565b92915050565b61107281610fbd565b82525050565b600060208201905061108d6000830184611069565b92915050565b6000806000606084860312156110ac576110ab610f5a565b5b60006110ba86828701610fa8565b93505060206110cb86828701610fa8565b92505060406110dc86828701610fde565b9150509250925092565b600060ff82169050919050565b6110fc816110e6565b82525050565b600060208201905061111760008301846110f3565b92915050565b60006020828403121561113357611132610f5a565b5b600061114184828501610fa8565b91505092915050565b61115381610f7f565b82525050565b600060208201905061116e600083018461114a565b92915050565b6000806040838503121561118b5761118a610f5a565b5b600061119985828601610fa8565b92505060206111aa85828601610fa8565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806111fb57607f821691505b6020821081141561120f5761120e6111b4565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061124f82610fbd565b915061125a83610fbd565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561128f5761128e611215565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006112f6602583610eaa565b91506113018261129a565b604082019050919050565b60006020820190508181036000830152611325816112e9565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611388602683610eaa565b91506113938261132c565b604082019050919050565b600060208201905081810360008301526113b78161137b565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061141a602483610eaa565b9150611425826113be565b604082019050919050565b600060208201905081810360008301526114498161140d565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006114ac602283610eaa565b91506114b782611450565b604082019050919050565b600060208201905081810360008301526114db8161149f565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611518601d83610eaa565b9150611523826114e2565b602082019050919050565b600060208201905081810360008301526115478161150b565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006115aa602583610eaa565b91506115b58261154e565b604082019050919050565b600060208201905081810360008301526115d98161159d565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600061163c602383610eaa565b9150611647826115e0565b604082019050919050565b6000602082019050818103600083015261166b8161162f565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006116ce602683610eaa565b91506116d982611672565b604082019050919050565b600060208201905081810360008301526116fd816116c1565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061173a602083610eaa565b915061174582611704565b602082019050919050565b600060208201905081810360008301526117698161172d565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006117a6601f83610eaa565b91506117b182611770565b602082019050919050565b600060208201905081810360008301526117d581611799565b905091905056fea264697066735822122019b4dbb892dfbb99f1b1221ee6491a2d5138bee39a03ae8752e395c9f7d401bf64736f6c63430008090033";

type UnityERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UnityERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UnityERC20__factory extends ContractFactory {
  constructor(...args: UnityERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UnityERC20> {
    return super.deploy(overrides || {}) as Promise<UnityERC20>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UnityERC20 {
    return super.attach(address) as UnityERC20;
  }
  override connect(signer: Signer): UnityERC20__factory {
    return super.connect(signer) as UnityERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UnityERC20Interface {
    return new utils.Interface(_abi) as UnityERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UnityERC20 {
    return new Contract(address, _abi, signerOrProvider) as UnityERC20;
  }
}
