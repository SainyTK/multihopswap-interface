import create from 'zustand';
import { TOKENS } from '../constants/tokens';
import { TokenType } from '../types/TokenType';

const getInitialTokens = () => {
    const tokensStr = localStorage.getItem('tokens');
    const localTokens = tokensStr ? JSON.parse(tokensStr) : {};
    return { ...TOKENS, ...localTokens }
}

const getInitialBalances = () => {
    const balancesStr = localStorage.getItem('balances');
    const localBalances = balancesStr ? JSON.parse(balancesStr) : {};
    return localBalances;
}

interface Store {
    address: string,
    tokens: Record<string, TokenType>,
    balances: Record<string, number>,
    setAddress: (address: string) => void,
    setTokens: (tokens: Record<string, TokenType>) => void,
    setBalances: (balances: Record<string, number>) => void
}

export const useStore = create<Store>((set, get) => ({
    address: '',
    tokens: getInitialTokens(),
    balances: getInitialBalances(),
    setAddress: (address: string) => {
        set({ address })
    },
    setTokens: (tokens: Record<string, TokenType>) => {
        const updatedTokens = { ...get().tokens, ...tokens }
        set({ tokens: updatedTokens })
        localStorage.setItem('tokens', JSON.stringify(updatedTokens));
    },
    setBalances: (balances: Record<string, number>) => {
        const updatedBalances = { ...get().balances, ...balances };
        set({ balances: updatedBalances })
        localStorage.setItem('balances', JSON.stringify(updatedBalances));
    }
}))