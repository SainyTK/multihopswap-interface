/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC721 } from "../ERC721";

export class ERC721__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
    name: "baseURI",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200233838038062002338833981810160405260408110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b5060405250620001b391506301ffc9a760e01b90506200021d565b8151620001c8906006906020850190620002a2565b508051620001de906007906020840190620002a2565b50620001f16380ac58cd60e01b6200021d565b62000203635b5e139f60e01b6200021d565b6200021563780e9d6360e01b6200021d565b50506200034e565b6001600160e01b031980821614156200027d576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620002da576000855562000325565b82601f10620002f557805160ff191683800117855562000325565b8280016001018555821562000325579182015b828111156200032557825182559160200191906001019062000308565b506200033392915062000337565b5090565b5b8082111562000333576000815560010162000338565b611fda806200035e6000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c80634f6ccce7116100b257806395d89b4111610081578063b88d4fde11610066578063b88d4fde14610402578063c87b56dd146104d5578063e985e9c5146104f25761011b565b806395d89b41146103bf578063a22cb465146103c75761011b565b80634f6ccce71461034a5780636352211e146103675780636c0360eb1461038457806370a082311461038c5761011b565b806318160ddd116100ee57806318160ddd1461027157806323b872dd1461028b5780632f745c59146102ce57806342842e0e146103075761011b565b806301ffc9a71461012057806306fdde0314610173578063081812fc146101f0578063095ea7b314610236575b600080fd5b61015f6004803603602081101561013657600080fd5b50357fffffffff000000000000000000000000000000000000000000000000000000001661052d565b604080519115158252519081900360200190f35b61017b610568565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101b557818101518382015260200161019d565b50505050905090810190601f1680156101e25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61020d6004803603602081101561020657600080fd5b503561061c565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61026f6004803603604081101561024c57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356106a5565b005b6102796107e8565b60408051918252519081900360200190f35b61026f600480360360608110156102a157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356107f9565b610279600480360360408110156102e457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561086a565b61026f6004803603606081101561031d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356108a2565b6102796004803603602081101561036057600080fd5b50356108bd565b61020d6004803603602081101561037d57600080fd5b50356108d3565b61017b6108fb565b610279600480360360208110156103a257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661097a565b61017b610a16565b61026f600480360360408110156103dd57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001351515610a95565b61026f6004803603608081101561041857600080fd5b73ffffffffffffffffffffffffffffffffffffffff82358116926020810135909116916040820135919081019060808101606082013564010000000081111561046057600080fd5b82018360208201111561047257600080fd5b8035906020019184600183028401116401000000008311171561049457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610c06945050505050565b61017b600480360360208110156104eb57600080fd5b5035610c7e565b61015f6004803603604081101561050857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610feb565b7fffffffff00000000000000000000000000000000000000000000000000000000811660009081526020819052604090205460ff165b919050565b60068054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106125780601f106105e757610100808354040283529160200191610612565b820191906000526020600020905b8154815290600101906020018083116105f557829003601f168201915b5050505050905090565b600061062782611026565b61067c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180611ef8602c913960400191505060405180910390fd5b5060009081526004602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b60006106b0826108d3565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610737576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611f7c6021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610756611033565b73ffffffffffffffffffffffffffffffffffffffff16148061078457506107848161077f611033565b610feb565b6107d9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180611e4b6038913960400191505060405180910390fd5b6107e38383611037565b505050565b60006107f460026110d7565b905090565b61080a610804611033565b826110e2565b61085f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180611f9d6031913960400191505060405180910390fd5b6107e38383836111d4565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260016020526040812061089990836113af565b90505b92915050565b6107e383838360405180602001604052806000815250610c06565b6000806108cb6002846113bb565b509392505050565b600061089c82604051806060016040528060298152602001611ead60299139600291906113d7565b60098054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106125780601f106105e757610100808354040283529160200191610612565b600073ffffffffffffffffffffffffffffffffffffffff82166109e8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180611e83602a913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216600090815260016020526040902061089c906110d7565b60078054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106125780601f106105e757610100808354040283529160200191610612565b610a9d611033565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b3757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015290519081900360640190fd5b8060056000610b44611033565b73ffffffffffffffffffffffffffffffffffffffff90811682526020808301939093526040918201600090812091871680825291909352912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001692151592909217909155610bb3611033565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b610c17610c11611033565b836110e2565b610c6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180611f9d6031913960400191505060405180910390fd5b610c78848484846113ee565b50505050565b6060610c8982611026565b610cde576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180611f4d602f913960400191505060405180910390fd5b60008281526008602090815260408083208054825160026001831615610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190921691909104601f810185900485028201850190935282815292909190830182828015610d8f5780601f10610d6457610100808354040283529160200191610d8f565b820191906000526020600020905b815481529060010190602001808311610d7257829003601f168201915b505050505090506000610da06108fb565b9050805160001415610db457509050610563565b815115610ecf5780826040516020018083805190602001908083835b60208310610e0d57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610dd0565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018019909216911617905285519190930192850191508083835b60208310610e9157805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610e54565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050610563565b80610ed98561145a565b6040516020018083805190602001908083835b60208310610f2957805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610eec565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018019909216911617905285519190930192850191508083835b60208310610fad57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610f70565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050919050565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260056020908152604080832093909416825291909152205460ff1690565b600061089c600283611587565b3390565b600081815260046020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84169081179091558190611091826108d3565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061089c82611593565b60006110ed82611026565b611142576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180611e1f602c913960400191505060405180910390fd5b600061114d836108d3565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806111bc57508373ffffffffffffffffffffffffffffffffffffffff166111a48461061c565b73ffffffffffffffffffffffffffffffffffffffff16145b806111cc57506111cc8185610feb565b949350505050565b8273ffffffffffffffffffffffffffffffffffffffff166111f4826108d3565b73ffffffffffffffffffffffffffffffffffffffff1614611260576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180611f246029913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166112cc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180611dfb6024913960400191505060405180910390fd5b6112d78383836107e3565b6112e2600082611037565b73ffffffffffffffffffffffffffffffffffffffff831660009081526001602052604090206113119082611597565b5073ffffffffffffffffffffffffffffffffffffffff8216600090815260016020526040902061134190826115a3565b5061134e600282846115af565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600061089983836115d2565b60008080806113ca8686611650565b9097909650945050505050565b60006113e48484846116e5565b90505b9392505050565b6113f98484846111d4565b611405848484846117c9565b610c78576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180611dc96032913960400191505060405180910390fd5b60608161149b575060408051808201909152600181527f30000000000000000000000000000000000000000000000000000000000000006020820152610563565b8160005b81156114b357600101600a8204915061149f565b60008167ffffffffffffffff811180156114cc57600080fd5b506040519080825280601f01601f1916602001820160405280156114f7576020820181803683370190505b5085935090507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82015b831561157e57600a840660300160f81b8282806001900393508151811061154457fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a84049350611521565b50949350505050565b600061089983836119d9565b5490565b600061089983836119f1565b60006108998383611ad5565b60006113e4848473ffffffffffffffffffffffffffffffffffffffff8516611b1f565b8154600090821061162e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611da76022913960400191505060405180910390fd5b82600001828154811061163d57fe5b9060005260206000200154905092915050565b8154600090819083106116ae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611ed66022913960400191505060405180910390fd5b60008460000184815481106116bf57fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b6000828152600184016020526040812054828161179a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561175f578181015183820152602001611747565b50505050905090810190601f16801561178c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508460000160018203815481106117ad57fe5b9060005260206000209060020201600101549150509392505050565b60006117ea8473ffffffffffffffffffffffffffffffffffffffff16611bb6565b6117f6575060016111cc565b600061196e7f150b7a0200000000000000000000000000000000000000000000000000000000611824611033565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156118a557818101518382015260200161188d565b50505050905090810190601f1680156118d25780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051806060016040528060328152602001611dc96032913973ffffffffffffffffffffffffffffffffffffffff88169190611bbc565b9050600081806020019051602081101561198757600080fd5b50517fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a02000000000000000000000000000000000000000000000000000000001492505050949350505050565b60009081526001919091016020526040902054151590565b60008181526001830160205260408120548015611acb5783547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8083019190810190600090879083908110611a4257fe5b9060005260206000200154905080876000018481548110611a5f57fe5b600091825260208083209091019290925582815260018981019092526040902090840190558654879080611a8f57fe5b6001900381819060005260206000200160009055905586600101600087815260200190815260200160002060009055600194505050505061089c565b600091505061089c565b6000611ae183836119d9565b611b175750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561089c565b50600061089c565b600082815260018401602052604081205480611b845750506040805180820182528381526020808201848152865460018181018955600089815284812095516002909302909501918255915190820155865486845281880190925292909120556113e7565b82856000016001830381548110611b9757fe5b90600052602060002090600202016001018190555060009150506113e7565b3b151590565b60606113e4848460008585611bd085611bb6565b611c3b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310611ca457805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101611c67565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611d06576040519150601f19603f3d011682016040523d82523d6000602084013e611d0b565b606091505b5091509150611d1b828286611d26565b979650505050505050565b60608315611d355750816113e7565b825115611d455782518084602001fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181815284516024840152845185939192839260440191908501908083836000831561175f57818101518382015260200161174756fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a164736f6c6343000706000a";