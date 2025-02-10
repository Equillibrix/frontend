import { getBalance } from '@wagmi/core';
import { Address, formatUnits } from 'viem';
import { config } from '@/app/config';
import { useQuery } from '@tanstack/react-query';
import { USDC_ARB_SEPOLIA, USDC_CONTRACT_ADDRESS_MAINNET } from '@/shared/config/contracts';

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
        token: chainId === ARB_SEPOLIA_CHAIN_ID ? USDC_ARB_SEPOLIA : USDC_CONTRACT_ADDRESS_MAINNET, // 42164 is the Arbitrum Sepolia
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
