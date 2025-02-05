import { useAccount } from 'wagmi';
import { Platform, TitleAmount } from '../TitleAmount';
import { Divider } from '@nextui-org/react';
import { useStore } from '@/shared/hooks/useStore';
import { getShortAmount } from '@/shared/lib/getShortAmount';
import { getShortDebt } from '@/shared/lib/getShortDebt';
import { GeneralInfoCard } from '../GeneralInfoCard';

export const ShortPosition = () => {
    const { chain } = useAccount();
    const { amount, leverage } = useStore();

    return (
        <div className="flex flex-col gap-6 p-4 w-full bg-[rgb(31,33,45)] bg-opacity-100 rounded-lg md:w-1/2 md:max-w-none max-w-md">
            <span>Short Position</span>

            <TitleAmount chain={chain?.name} platform={Platform.HYPERLIQUID} />

            <GeneralInfoCard
                title="Final State"
                items={[
                    { label: 'Amount', value: getShortAmount(amount, leverage) },

                    { label: 'Debt', value: getShortDebt(amount, leverage) }, // from Hyperliquid or Amount(Short)*(L-1)
                    { label: 'Leverage', value: leverage + 'x' },
                    { label: 'Net APY %', value: '10.83%' }, // from Hyperliquid or (Funding Rate)*24*365*L
                    { label: 'Funding Rate', value: '42.42%' }, // from Hyperliquid
                ]}
            />

            <Divider />

            <GeneralInfoCard
                title="Liquidation Info"
                items={[
                    { label: 'Liquidation Price', value: '1,157212' },
                    { label: 'Current Price', value: '1,1834342' },
                ]}
            />
        </div>
    );
};
