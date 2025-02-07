import { getBalance } from '@wagmi/core';
import { Address, formatUnits } from 'viem';
import { config } from '@/app/config';
import { useQuery } from '@tanstack/react-query';

const USDC_ARB_SEPOLIA = '0x75faf114eafb1bdbe2f0316df893fd58ce46aa4d';
const USDC_MAINNET = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
const ARB_SEPOLIA_CHAIN_ID = 421614;

const fetchBalance = async ({
    address,
    chainId,
}: {
    address: Address | undefined;
    chainId: number | undefined;
}): Promise<string> => {
    if (!address) return '0';
    const result = await getBalance(config, {
        address,
        token: chainId === ARB_SEPOLIA_CHAIN_ID ? USDC_ARB_SEPOLIA : USDC_MAINNET, // 42164 is the Arbitrum Sepolia
        chainId,
    });

    if (result.value) {
        return formatUnits(result.value, 6);
    }

    return '0';
};

export const useGetBalance = ({
    address,
    chainId,
}: {
    address: Address | undefined;
    chainId: number | undefined;
}) => {
    return useQuery({
        queryKey: ['balance', address, chainId],
        queryFn: () => fetchBalance({ address, chainId }),
        enabled: address !== undefined && chainId !== undefined,
        initialData: '0',
    });
};
