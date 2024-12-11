import { Divider } from '@nextui-org/react';
import { InfoSection } from './_components/InfoBlock';
import { useStore } from '@/shared/hooks/useStore';

export const GeneralInfoCard = () => {
    const { amount, leverage } = useStore();

    return (
        <div className="flex w-full justify-center max-w-md md:w-1/2 md:max-w-none">
            <div className="p-4 bg-[rgb(31,33,45)] bg-opacity-100 flex flex-col gap-3 w-full h-fit rounded-lg text-base">
                <InfoSection
                    title="Final State"
                    items={[
                        { label: 'Value', value: amount },
                        { label: 'Debt', value: '0' },
                        { label: 'Leverage', value: leverage + 'x' },
                        { label: 'Net APY %', value: '10.83%' },
                    ]}
                />

                <Divider />

                <InfoSection
                    title="Liquidation Info"
                    items={[
                        { label: 'Liquidation Price', value: '1,157212' },
                        { label: 'Current Price', value: '1,1834342' },
                    ]}
                />
            </div>
        </div>
    );
};
