import { NetworkID } from "../enum/NetworkID";

export const getBlockExplorerUrl = (networkID: NetworkID) => {
    switch (networkID) {
        case NetworkID.Mainnet: return `https://etherscan.io`;
        case NetworkID.Ropsten: return `https://ropsten.etherscan.io`;
        case NetworkID.Rinkeby: return `https://rinkeby.etherscan.io`;
        case NetworkID.Kovan: return `https://kovan.etherscan.io`;
        case NetworkID.Goerli: return `https://goerli.etherscan.io`;
        case NetworkID.Arbitrum: return `https://arbiscan.io/`;
        case NetworkID.Optimism: return `https://optimistic.etherscan.io/`;
        default: return ``
    }
}