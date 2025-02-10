import { cookieStorage, createStorage, http, fallback, webSocket } from '@wagmi/core';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { baseSepolia, sepolia, arbitrumSepolia, mainnet } from '@reown/appkit/networks';
import { customChain } from '@/shared/config';

// projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) {
    throw new Error('Project ID is not defined');
}

export const networks = [customChain, mainnet, baseSepolia, sepolia, arbitrumSepolia];

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
    storage: createStorage({
        storage: cookieStorage,
    }),
    ssr: true,
    projectId,
    networks,
    transports: {
        [customChain.id]: http(process.env.NEXT_PUBLIC_RPC_URL),
        [arbitrumSepolia.id]: fallback([
            webSocket(process.env.NEXT_PUBLIC_RPC_URL_ARBITRUM_SEPOLIA),
        ]),
    },
});

export const config = wagmiAdapter.wagmiConfig;
