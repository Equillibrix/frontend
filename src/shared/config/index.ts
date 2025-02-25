import { defineChain } from '@reown/appkit/networks';

// Define the custom network
export const customChain = defineChain({
    id: 8888,
    caipNetworkId: 'eip155:8888',
    chainNamespace: 'eip155',
    name: 'XANAChain',
    nativeCurrency: {
        decimals: 18,
        name: 'XETA',
        symbol: 'X',
    },
    rpcUrls: {
        default: {
            http: [process.env.NEXT_PUBLIC_RPC_URL as string],
            webSocket: [''],
        },
    },
    blockExplorers: {
        default: {
            name: 'Explorer',
            url: 'https://dashboard.tenderly.co/explorer/vnet/0bb5c99e-e9b2-4476-9adc-9025e8913937/transactions',
        },
    },
    contracts: {
        // Add the contracts here
    },
});
