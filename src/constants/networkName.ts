import { NetworkID } from "../enum/NetworkID";

export const getNetworkName = (networkID: NetworkID) => {
    switch (networkID) {
        case NetworkID.Mainnet: return `Mainnet`;
        case NetworkID.Ropsten: return `Ropsten`;
        case NetworkID.Rinkeby: return `Rinkeby`;
        case NetworkID.Kovan: return `Kovan`;
        case NetworkID.Goerli: return `Goerli`;
        case NetworkID.Arbitrum: return `Arbitrum`;
        case NetworkID.Optimism: return `Optimism`;
        default: return ``
    }
}