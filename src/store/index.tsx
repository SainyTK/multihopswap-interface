import create from 'zustand';
import { NetworkID } from '../enum/NetworkID';
import { NotificationType } from '../types/NotificationType';
import { TokenType } from '../types/TokenType';

interface Store {
    address: string,
    tokens: Record<string, TokenType>,
    balances: Record<string, number>,
    allowances: Record<string, number>,
    notifications: NotificationType[],
    setAddress: (address: string) => void,
    setTokens: (networkID: NetworkID, tokens: Record<string, TokenType>) => void,
    setBalances: (balances: Record<string, number>) => void,
    setAllowances: (allowances: Record<string, number>) => void,
    pushNotification: (notification: NotificationType) => void
}

export const useStore = create<Store>((set, get) => ({
    address: '',
    tokens: {},
    balances: {},
    allowances: {},
    notifications: [],
    setAddress: (address: string) => {
        set({ address })
    },
    setTokens: (networkID: NetworkID, tokens: Record<string, TokenType>) => {
        const updatedTokens = { ...get().tokens, ...tokens }
        set({ tokens: updatedTokens })
        localStorage.setItem(`tokens:${networkID}`, JSON.stringify(updatedTokens));
    },
    setBalances: (balances: Record<string, number>) => {
        const updatedBalances = { ...get().balances, ...balances };
        set({ balances: updatedBalances })
    },
    setAllowances: (allowances: Record<string, number>) => {
        const updatedAllowances = { ...get().allowances, ...allowances };
        set({ allowances: updatedAllowances })
    },
    pushNotification: (notification: NotificationType) => {
        const TIMEOUT = 3000;
        const id = Math.floor(Math.random() * 10000);
        notification.id = id;
        const updatedNotification = [...get().notifications, notification];
        set({ notifications: updatedNotification });

        setTimeout(() => {
            set({ notifications: get().notifications.filter(noti => noti.id !== id) });
        }, TIMEOUT);
    }
}))