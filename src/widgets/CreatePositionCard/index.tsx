import { useEffect, useState } from 'react';
import { useAccount, useSwitchChain, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import { useAppKit } from '@reown/appkit/react';
import {
    CONTRACT_ABI_LONG_POSITION,
    CONTRACT_ADDRESS_LONG_POSITION,
} from '@/shared/config/contracts';
import { useStore } from '@/shared/hooks/useStore';
import { parseUnits } from 'viem';
import toast from 'react-hot-toast';
import { Button } from '@/shared/ui/button';
import { LongPosition, ShortPosition, TotalPosition } from './_components';
import useOpenShortPosition from '@/shared/hooks/useOpenShortPosition';

export const CreatePositionCard = () => {
    const { isConnected, chain, address } = useAccount();
    const { open } = useAppKit();
    const [isShortPositionLoading, setIsShortPositionLoading] = useState<boolean>(false);

    const { data: hash, writeContract, isPending, error: writeError } = useWriteContract();
    const { longAmount, longLeverage, shortAmount, shortLeverage } = useStore();

    const convertedSupplyAmount = parseUnits(longAmount.toString(), 18);
    const convertedLeverage = longLeverage * 1000;
    const slippage = 500;
    const nftId = 0; // for new position

    const { chains, switchChain } = useSwitchChain();

    // TO DO: calc supplyAmount & borrowAmount and check switchChains
    // not to forget to check USDC approve
    const handleSubmit = () => {
        if (convertedSupplyAmount && convertedLeverage) {
            console.log('LONG', convertedSupplyAmount, convertedLeverage);
            switchChain({ chainId: 8888 }); // Xanachain custom chain
            writeContract({
                address: CONTRACT_ADDRESS_LONG_POSITION,
                abi: CONTRACT_ABI_LONG_POSITION,
                functionName: 'openLeverage',
                // args: [convertedSupplyAmount, convertedLeverage, convertedSlippage],
                args: [nftId, supplyAmount, borrowAmount, slippage],
            });
        }
        if (shortAmount && shortLeverage) {
            switchChain({ chainId: 421614 }); // ARB sepolia

            useOpenShortPosition({
                shortAmount,
                shortLeverage,
                address,
                setIsShortPositionLoading,
                hyperliquidAddress: '0x9b595863Ec86637B61f48a059fd563421E7fb994',
                writeContract,
            });
        }
    };

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
            <TotalPosition />

            <div className="flex flex-col items-center md:items-stretch md:flex-row gap-4 md:w-full max-w-4xl w-screen">
                <LongPosition />
                <ShortPosition />
            </div>

            {isConnected ? (
                <Button
                    className="w-1/3"
                    onClick={handleSubmit}
                    isLoading={isPending || isLoading || isShortPositionLoading}
                    disabled={isShortPositionLoading}
                >
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
