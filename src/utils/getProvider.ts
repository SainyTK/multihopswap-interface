import { ethers } from "ethers";

export const ethereum = () => (window as any).ethereum;

export const getProvider = () => {
    const eth = ethereum()
    if (eth) {
        return new ethers.providers.Web3Provider(eth);
    }
    return null;
}

export const getSigner = () => {
    const provider = getProvider();
    if (provider) {
        return provider.getSigner();
    }
    return null;
}