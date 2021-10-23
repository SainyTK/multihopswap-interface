import { NetworkID } from "../enum/NetworkID";
import { TokenType } from "../types/TokenType";
import { getAddressList } from "./addressList";

export const ETH: TokenType = {
    address: '',
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
    imageUrl: "/assets/ETH.png"
}

export const TOKENS: Record<string, Omit<TokenType, "address">> = {
    "WETH": {
        decimals: 18,
        name: "Wrapped Ether",
        symbol: "WETH",
        imageUrl: "/assets/WETH.png"
    },
    "USDT": {
        decimals: 18,
        name: "USD Tether",
        symbol: "USDT",
        imageUrl: "/assets/USDT.png"
    },
    "DAI": {
        decimals: 18,
        name: "Dai stablecoin",
        symbol: "DAI",
        imageUrl: "/assets/DAI.png"
    },
    "USDC": {
        decimals: 6,
        name: "USD Coin",
        symbol: "USDC",
        imageUrl: "/assets/USDC.png"
    },
    "BAT": {
        decimals: 18,
        name: "Basic Authentication Token",
        symbol: "BAT",
        imageUrl: "/assets/BAT.png"
    },
    "ZRX": {
        decimals: 18,
        name: "0x",
        symbol: "ZRX",
        imageUrl: "/assets/ZRX.png"
    }
}

const mapTokenAddress = (symbols: string[], addressList: Record<string, string>) => {
    return symbols.reduce((prev, cur) => {
        const address = addressList[cur];
        const token = TOKENS[cur];
        if (!token) return prev;
        prev[cur] = { ...token, address }
        return prev;
    }, {} as Record<string, TokenType>)
}

export const getTokenList = (networkID: NetworkID) => {
    switch (networkID) {
        case NetworkID.Mainnet: return mapTokenAddress(["WETH", "USDT", "DAI", "KNC", "MKR"], getAddressList(networkID));
        case NetworkID.Ropsten: return mapTokenAddress(["WETH"], getAddressList(networkID));
        case NetworkID.Rinkeby: return mapTokenAddress(["ETH", "WETH", "USDT", "DAI", "USDC", "BAT", "ZRX"], getAddressList(networkID));
        case NetworkID.Kovan: return mapTokenAddress(["WETH"], getAddressList(networkID));
        case NetworkID.Arbitrum: return mapTokenAddress(["WETH", "USDT", "USDC", "UNI", "LINK"], getAddressList(networkID));
        case NetworkID.Optimism: return mapTokenAddress(["WETH"], getAddressList(networkID));
        default: return {};
    }
}