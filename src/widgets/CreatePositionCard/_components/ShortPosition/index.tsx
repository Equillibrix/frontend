import { useAccount } from 'wagmi';
import { TitleAmount } from '../TitleAmount';
import { InputAmount } from '../InputAmount';
import { SliderAmount } from '../SliderAmount';
import { GeneralInfoCard } from '@/widgets/GeneralInfoCard';

export const ShortPosition = () => {
    const { chain } = useAccount();

    return (
        <div className="flex flex-col items-center md:items-stretch md:flex-row gap-4 md:w-full max-w-4xl w-screen">
            <div className="flex flex-col gap-6 p-4 w-full bg-[rgb(31,33,45)] bg-opacity-100 rounded-lg md:w-1/2 md:max-w-none max-w-md">
                <span>Short Position</span>

                <TitleAmount chain={chain?.name} />

                <InputAmount />

                <SliderAmount />
            </div>
            <GeneralInfoCard />
        </div>
    );
};
