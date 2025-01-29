import { Config, useWriteContract } from 'wagmi';
import { parseUnits } from 'viem';
import { WriteContractMutate } from 'wagmi/query';
export const useTransferUSDC = () => {
    const handleTransfer = async ({
        amount,
        address,
        hyperliquidAddress,
        writeContract,
    }: {
        amount: string;
        address: `0x${string}` | undefined;
        hyperliquidAddress: string;
        writeContract: WriteContractMutate<Config, unknown>;
    }) => {
        if (!address) return;

        const amountInWei = parseUnits(amount, 6);

        writeContract({
            address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            abi: [
                {
                    constant: false,
                    inputs: [
                        { name: '_to', type: 'address' },
                        { name: '_value', type: 'uint256' },
                    ],
                    name: 'transfer',
                    outputs: [{ name: '', type: 'bool' }],
                    type: 'function',
                },
            ],
            functionName: 'transfer',
            args: [hyperliquidAddress, amountInWei],
        });
    };

    return { handleTransfer };
};
