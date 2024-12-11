import { useEffect } from 'react';
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import { useAppKit } from '@reown/appkit/react';
import {
    CONTRACT_ABI_LONG_POSITION,
    CONTRACT_ADDRESS_LONG_POSITION,
} from '@/shared/config/contracts';
import { useStore } from '@/shared/hooks/useStore';
import { parseUnits } from 'viem';
import toast from 'react-hot-toast';
import { Button } from '@/shared/ui/button';
import { ShortPosition } from './_components/ShortPosition';
import { LongPosition } from './_components/LongPosition';

export const CreatePositionCard = () => {
    const { isConnected, chain } = useAccount();
    const { open } = useAppKit();

    const { data: hash, writeContract, isPending, error: writeError } = useWriteContract();
    const { amount, leverage } = useStore();

    const convertedSupplyAmount = parseUnits(amount.toString(), 18);
    const convertedLeverage = leverage * 1000;
    const convertedSlippage = 500;

    const handleSubmit = () => {
        writeContract({
            address: CONTRACT_ADDRESS_LONG_POSITION,
            abi: CONTRACT_ABI_LONG_POSITION,
            functionName: 'createPosition',
            args: [convertedSupplyAmount, convertedLeverage, convertedSlippage],
            value: convertedSupplyAmount,
        });
    };
    // TODO check isLoading with real RPC
    const {
        error: receiptError,
        status,
        isLoading,
    } = useWaitForTransactionReceipt({
        hash,
    });

    useEffect(() => {
        if (writeError) {
            toast.dismiss();
            toast.error(writeError.message);
        }

        if (status === 'success') {
            toast.dismiss();
            toast.success('Successfully created position');
        }

        if (status === 'error') {
            toast.dismiss();
            toast.error(`Transaction failed: ${receiptError?.name}`);
        }

        return () => {
            toast.dismiss();
        };
    }, [status, receiptError, writeError]);

    return (
        <>
            <LongPosition />
            <ShortPosition />
            {isConnected ? (
                <Button className="w-1/3" onClick={handleSubmit} isLoading={isPending || isLoading}>
                    {isPending
                        ? 'Please confirm in your wallet...'
                        : isLoading
                          ? 'Submitting...'
                          : 'Submit Deposit'}
                </Button>
            ) : (
                <Button className="w-1/3" onClick={() => open()}>
                    Connect Wallet
                </Button>
            )}
        </>
    );
};
