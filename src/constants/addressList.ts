import { NetworkID } from "../enum/NetworkID"

const UNISWAP_ADDRESSES = {
    SWAP_V3_FACTORY: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
    SWAP_V3_ROUTER: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
    SWAP_V3_QUOTER: "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6",
}

const mainnet = {
    WETH: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    USDT: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    DAI: "0x6b175474e89094c44da98b954eedeac495271d0f",
    KNC: "0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202",
    MKR: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    COMP: "0xc00e94cb662c3520282e6f5717214004a7f26888",
    LINK: "0x514910771af9ca656af840dff83e8264ecf986ca",
    BNB: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
    MANA: "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
    OMG: "0xd26114cd6ee289accf82350c8d8487fedb8a0c07",
    POLY: "0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec",
    POWR: "0x595832f8fc6bf59c85c527fec3740a1b7a361269",
    WBTC: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    ZRX: "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
    ...UNISWAP_ADDRESSES
}

const ropsten = {
    ...UNISWAP_ADDRESSES
}

const rinkeby = {
    WETH: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
    BAT: "0xbf7a7169562078c96f0ec1a8afd6ae50f12e5a99",
    DAI: "0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea",
    USDC: "0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b",
    USDT: "0xd9ba894e0097f8cc2bbc9d24d308b98e36dc6d02",
    ZRX: "0xddea378a6ddc8afec82c36e9b0078826bf9e68b6",
    ...UNISWAP_ADDRESSES
}

const kovan = {
    ...UNISWAP_ADDRESSES
}

const goerli = {
    ...UNISWAP_ADDRESSES
}

const arbitrum = {
    WETH: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    USDT: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    USDC: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
    UNI: "0xfa7f8980b0f1e64a2062791cc3b0871572f1f7f0",
    LINK: "0xf97f4df75117a78c1a5a0dbb814af92458539fb4",
    WBTC: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
    GRT: "0x23a941036ae778ac51ab04cea08ed6e2fe103614",
    SUSHI: "0xd4d42f0b6def4ce0383636770ef773390d85c61a",
    COMP: "0x354a6da3fcde098f8389cad84b0182725c6c91de",
    YFI: "0x82e3a8f066a6989666b031d916c43672085b1582",
    CRV: "0x11cdb42b0eb46d95f990bedd4695a6e3fa034978",
    CELR: "0x3a8b787f78d775aecfeea15706d4221b40f345ab",
    GNO: "0xa0b862f60edef4452f25b4160f177db44deb6cf1",
    RGT: "0xef888bca6ab6b1d26dbec977c455388ecd794794",
    DODO: "0x69eb4fa4a2fbd498c257c57ea8b7655a2559a581",
    BADGER: "0xbfa641051ba0a0ad1b0acf549a89536a0d76472e",
    BAL: "0x040d1edc9569d4bab2d15287dc5a4f10f56a56b8",
    MATH: "0x99f40b01ba9c469193b360f72740e416b17ac332",
    sUSD: "0xa970af1a584579b618be4d69ad6f73459d112f95",
    CREAM: "0xf4d48ce3ee1ac3651998971541badbb9a14d7234",
    MCB: "0x4e352cf164e64adcbad318c3a1e222e9eba4ce42",
    SDT: "0x7ba4a00d54a07461d9db2aef539e91409943adc9",
    DF: "0xae6aab43c4f3e0cea4ab83752c278f8debaba689",
    CAP: "0x031d35296154279dc1984dcd93e392b1f946737b",
    ALCH: "0x0e15258734300290a651fdbae8deb039a8e7a2fa",
    ...UNISWAP_ADDRESSES
}

const optimism = {
    WETH: "0x4200000000000000000000000000000000000006",
    USDT: "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
    USDC: "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
    LINK: "0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6",
    WBTC: "0x68f180fcce6836688e9084f035309e29bf0a2095",
    DAI: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
    SNX: "0x8700daec35af8ff88c16bdf0418774cb3d7599b4",
    sETH: "0xe405de8f52ba7559f9df3c368500b6e6ae6cee49",
    RGT: "0xb548f63d4405466b36c0c0ac3318a22fdcec711a",
    sBTC: "0x298b9b95708152ff6968aafd889c6586e9169f1d",
    sUSD: "0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9",
    ...UNISWAP_ADDRESSES
}

type AddressType<T> =
    T extends NetworkID.Mainnet ? typeof mainnet :
    T extends NetworkID.Ropsten ? typeof ropsten :
    T extends NetworkID.Rinkeby ? typeof rinkeby :
    T extends NetworkID.Kovan ? typeof kovan :
    T extends NetworkID.Goerli ? typeof goerli :
    T extends NetworkID.Arbitrum ? typeof arbitrum :
    T extends NetworkID.Optimism ? typeof optimism :
    {};

export const getAddressList = <T extends NetworkID>(networkID: T) => {
    switch (networkID) {
        case NetworkID.Mainnet: return mainnet as AddressType<T>;
        case NetworkID.Ropsten: return ropsten as AddressType<T>;
        case NetworkID.Rinkeby: return rinkeby as AddressType<T>;
        case NetworkID.Kovan: return kovan as AddressType<T>;
        case NetworkID.Goerli: return goerli as AddressType<T>;
        case NetworkID.Arbitrum: return arbitrum as AddressType<T>;
        case NetworkID.Optimism: return optimism as AddressType<T>;
        default: return {} as AddressType<T>;
    }
}