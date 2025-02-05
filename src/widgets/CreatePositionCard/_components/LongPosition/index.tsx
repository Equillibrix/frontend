import { useAccount } from 'wagmi';
import { Platform, TitleAmount } from '../TitleAmount';
import { InfoSection } from '@/widgets/GeneralInfoCard/_components/InfoBlock';
import { Divider } from '@nextui-org/react';
import { useStore } from '@/shared/hooks/useStore';
import { getLongAmount } from '@/shared/lib/getLongAmount';

export const LongPosition = () => {
    const { chain } = useAccount();
    const { amount, leverage } = useStore();

    return (
        <div className="flex flex-col gap-6 p-4 w-full bg-[rgb(31,33,45)] bg-opacity-100 rounded-lg md:w-1/2 md:max-w-none max-w-md">
            <span>Long Position</span>

            <TitleAmount chain={chain?.name} platform={Platform.FLUID} />

            <InfoSection
                title="Final State"
                items={[
                    { label: 'Amount', value: getLongAmount(amount, leverage) },
                    { label: 'Debt', value: '0' },
                    { label: 'Leverage', value: leverage + 'x' },
                    { label: 'Net APY %', value: '10.83%' },
                ]}
            />

            <Divider />

            <InfoSection
                title="Liquidation Info"
                items={[
                    { label: 'Collateral Factor', value: '1,157212' },
                    { label: 'Liquidation Threshold', value: '1,1834342' },
                ]}
            />
        </div>
    );
};
