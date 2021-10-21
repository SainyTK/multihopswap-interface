import { TokenType } from "../types/TokenType";

export const TOKENS: Record<string, TokenType> = {
    "ETH": {
        address: "",
        decimals: 18,
        name: "Ether",
        symbol: "ETH",
        imageUrl: "/assets/ETH.png"
    },
    "USDT": {
        address: "0xd9ba894e0097f8cc2bbc9d24d308b98e36dc6d02",
        decimals: 18,
        name: "USD Tether",
        symbol: "USDT",
        imageUrl: "/assets/USDT.png"
    },
    "DAI": {
        address: "0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea",
        decimals: 18,
        name: "Dai stablecoin",
        symbol: "DAI",
        imageUrl: "/assets/DAI.png"
    },
    "USDC": {
        address: "0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b",
        decimals: 6,
        name: "USD Coin",
        symbol: "USDC",
        imageUrl: "/assets/USDC.png"
    },
    "BAT": {
        address: "0xbf7a7169562078c96f0ec1a8afd6ae50f12e5a99",
        decimals: 18,
        name: "Basic Authentication Token",
        symbol: "BAT",
        imageUrl: "/assets/BAT.png"
    },
    "ZRX": {
        address: "0xddea378a6ddc8afec82c36e9b0078826bf9e68b6",
        decimals: 18,
        name: "0x",
        symbol: "ZRX",
        imageUrl: "/assets/ZRX.png"
    }
}