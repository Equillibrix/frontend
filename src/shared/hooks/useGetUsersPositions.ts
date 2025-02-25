import { useReadContract, useReadContracts } from 'wagmi';
import { Address } from 'viem';
import { CONTRACT_ADDRESS_LONG_POSITION } from '@/shared/config/contracts';
import { CONTRACT_ABI_LONG_POSITION } from '@/shared/config/contracts';

interface Position {
    nftId: number;
    owner: Address;
    supply: number;
    borrow: number;
    isLiquidated: boolean;
}

export const useGetUsersPositions = (userAddress: Address | undefined) => {
    // get the array of user's NFT IDs
    const { data: positionIds, isLoading: isLoadingIds } = useReadContract({
        address: CONTRACT_ADDRESS_LONG_POSITION,
        abi: CONTRACT_ABI_LONG_POSITION,
        functionName: 'getUserPositions',
        account: userAddress,
        query: {
            enabled: !!userAddress,
        },
    });

    const { data: priceData, isLoading: isLoadingPrice } = useReadContract({
        address: CONTRACT_ADDRESS_LONG_POSITION,
        abi: CONTRACT_ABI_LONG_POSITION,
        functionName: 'getLongSupplyPrice',
        account: userAddress,
        query: {
            enabled: !!userAddress,
        },
    });

    const price = priceData as bigint;

    const contracts =
        (positionIds as BigInt[])?.map((id) => ({
            address: CONTRACT_ADDRESS_LONG_POSITION,
            abi: CONTRACT_ABI_LONG_POSITION,
            functionName: 'getPositionInfo',
            args: [id],
        })) || [];

    const { data: positionsData, isLoading: isLoadingPositions } = useReadContracts({
        contracts: contracts as any,
        query: {
            enabled: !!positionIds && (positionIds as number[])?.length > 0,
        },
    });

    const positions: Position[] = positionsData
        ? positionsData.map((data) => {
              console.log('data', data);
              const { nftId, owner, supply, borrow, isLiquidated } = data.result as {
                  nftId: number;
                  owner: Address;
                  supply: number;
                  borrow: number;
                  isLiquidated: boolean;
              };
              return {
                  nftId,
                  owner,
                  supply,
                  borrow,
                  isLiquidated,
              };
          })
        : [];

    return {
        positions,
        price,
        isLoading: isLoadingIds || isLoadingPositions || isLoadingPrice,
    };
};
