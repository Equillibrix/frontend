import { create } from 'zustand';

interface StoreState {
    leverage: number;
    setLeverage: (leverage: number) => void;
    longLeverage: number;
    longAmount: string;
    setLongAmount: (longAmount: string) => void;
    setLongLeverage: (longLeverage: number) => void;
    shortAmount: string;
    shortLeverage: number;
    setShortAmount: (shortAmount: string) => void;
    setShortLeverage: (shortLeverage: number) => void;
}

export const useStore = create<StoreState>()((set) => ({
    leverage: 1,
    setLeverage: (leverage) => set(() => ({ leverage })),

    longAmount: '0',
    longLeverage: 1,
    setLongAmount: (longAmount) => set(() => ({ longAmount })),
    setLongLeverage: (longLeverage) => set(() => ({ longLeverage })),

    shortAmount: '0',
    shortLeverage: 1,
    setShortAmount: (shortAmount) => set(() => ({ shortAmount })),
    setShortLeverage: (shortLeverage) => set(() => ({ shortLeverage })),
}));
