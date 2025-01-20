import { create } from 'zustand';

interface StoreState {
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
    longAmount: '0',
    longLeverage: 1,
    setLongAmount: (longAmount) => set(() => ({ longAmount })),
    setLongLeverage: (longLeverage) => set(() => ({ longLeverage })),

    shortAmount: '0',
    shortLeverage: 1,
    setShortAmount: (shortAmount) => set(() => ({ shortAmount })),
    setShortLeverage: (shortLeverage) => set(() => ({ shortLeverage })),
}));
