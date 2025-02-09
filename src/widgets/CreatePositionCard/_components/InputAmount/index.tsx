import { Input } from '@nextui-org/react';
import { useGetBalance } from '@/shared/hooks/useGetBalance';
import { useStore } from '@/shared/hooks/useStore';
import { useAccount } from 'wagmi';

export const InputAmount = () => {
    const { address, chainId } = useAccount();
    const { data: userBalance } = useGetBalance({ address, chainId });
    const { setShortAmount, setLongAmount, leverage } = useStore();

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === '+' || event.key === '-') {
            event.preventDefault();
        }
    };

    const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
        const paste = event.clipboardData.getData('text');
        if (/[+-]/.test(paste)) {
            event.preventDefault();
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const amount = event.target.value;

        const longAmount = (+amount * leverage) / (leverage + 1);
        const shortAmount = +amount / (leverage + 1);

        const convertedLongAmount = longAmount.toFixed(6).toString();
        const convertedShortAmount = shortAmount.toFixed(6).toString();

        setLongAmount(convertedLongAmount);
        setShortAmount(convertedShortAmount);
    };

    return (
        <Input
            variant="bordered"
            type="number"
            label="Amount"
            labelPlacement="inside"
            placeholder="Enter amount USDC"
            className="w-full m-0 [&_input::-webkit-outer-spin-button]:appearance-none [&_input::-webkit-inner-spin-button]:appearance-none [&_input::-moz-outer-spin-button]:appearance-none [&_input::-moz-inner-spin-button]:appearance-none"
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
            endContent={
                <div className="flex md:flex-nowrap mb-4 gap-1 text-xs">
                    <span className="text-default-400 whitespace-nowrap">USDC balance: </span>
                    <span>{userBalance}</span>
                </div>
            }
            onChange={handleChange}
        />
    );
};
