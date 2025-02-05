import { Divider } from '@nextui-org/react';
import { InputAmount } from '../InputAmount';
import { SliderAmount } from '../SliderAmount';
import { InfoSection } from '@/widgets/GeneralInfoCard/_components/InfoBlock';

export const TotalPosition = () => {
    return (
        <div className="flex flex-col items-center   gap-4 md:w-full  w-screen">
            <div className="flex flex-col gap-6 p-8 w-full bg-[rgb(31,33,45)] bg-opacity-100 rounded-lg md:w-1/2 md:max-w-none max-w-md">
                <span>Total Position</span>

                <InputAmount />
                <SliderAmount />

                <Divider />

                {/* TODO: Net APY,% = Net APY (Long)*(L/(L+1)) + Net APY (Short)/(L+1). */}
                <InfoSection
                    items={[
                        {
                            label: 'Net APY %',
                            value: '10.83%',
                        },
                    ]}
                />
            </div>
        </div>
    );
};
