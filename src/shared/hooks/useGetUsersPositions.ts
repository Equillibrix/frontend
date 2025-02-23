import { useContractRead, useContractReads } from 'wagmi';
import { Address } from 'viem';
import { CONTRACT_ADDRESS_LONG_POSITION } from '@/shared/config/contracts';
import { CONTRACT_ABI_LONG_POSITION } from '@/shared/config/contracts';

// определяем типы для позиции
interface Position {
    nftId: number;
    owner: Address;
    supply: number;
    borrow: number;
    isLiquidated: boolean;
}

export const useGetUsersPositions = (userAddress: Address | undefined) => {
    // получаем массив NFT ID пользователя
    const { data: positionIds, isLoading: isLoadingIds } = useContractRead({
        address: CONTRACT_ADDRESS_LONG_POSITION,
        abi: CONTRACT_ABI_LONG_POSITION,
        functionName: 'getUserPositions',
        args: [userAddress],
        query: {
            enabled: !!userAddress
        }
    });

    // формируем массив запросов для получения информации по каждой позиции
    const contracts = [{
        address: CONTRACT_ADDRESS_LONG_POSITION,
        abi: CONTRACT_ABI_LONG_POSITION,
        functionName: 'getPositionInfo',
        args: [(positionIds as number[] || [])]
    }] as const;

    // получение информации по всем позициям
    const { data: positionsData, isLoading: isLoadingPositions } = useContractReads({
        contracts, 
        query: {
            enabled: !!positionIds && (positionIds as number[])?.length > 0
        }
    });

    // преобразуем данные в более удобный формат
    const positions: Position[] = positionsData 
        ? positionsData.map((data) => {
            const [nftId, owner, supply, borrow, isLiquidated] = data.result as [
                number, 
                Address,
                number,
                number,
                boolean
            ];
            return {
                nftId,
                owner,
                supply,
                borrow,
                isLiquidated
            };
        })
        : [];

    return {
        positions,
        isLoading: isLoadingIds || isLoadingPositions
    };
};