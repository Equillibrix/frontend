import { useState } from 'react';
import {
    useAccount,
    useReadContract,
    useSwitchChain,
    useWaitForTransactionReceipt,
    useWriteContract,
} from 'wagmi';
import { waitForTransactionReceipt } from '@wagmi/core';
import { useAppKit } from '@reown/appkit/react';
import {
    CONTRACT_ABI_LONG_POSITION,
    CONTRACT_ADDRESS_LONG_POSITION,
    USDC_CONTRACT_ADDRESS_MAINNET,
    USDC_ERC20_ABI,
} from '@/shared/config/contracts';
import { useStore } from '@/shared/hooks/useStore';
import toast from 'react-hot-toast';
import { Button } from '@/shared/ui/button';
import { LongPosition, ShortPosition, TotalPosition } from './_components';
import useOpenShortPosition from '@/shared/hooks/useOpenShortPosition';
import { config } from '@/app/config';
import { parseUnits } from 'viem';

export const CreatePositionCard = () => {
    const { isConnected, chain, address } = useAccount();
    const { open } = useAppKit();
    const [isShortPositionLoading, setIsShortPositionLoading] = useState<boolean>(false);

    const {
        data: hash,
        writeContract,
        isPending,
        error: writeError,
        writeContractAsync,
    } = useWriteContract();
    const { longAmount, shortAmount, shortLeverage, leverage } = useStore();

    const borrowAmount = (Number(longAmount) * leverage - Number(longAmount)).toFixed(6).toString();
    const slippage = 500;
    const nftId = 0; // for new position

    const { chains, switchChain } = useSwitchChain();

    // Check if user has already approved USDC
    const { data: allowance } = useReadContract({
        abi: USDC_ERC20_ABI,
        address: USDC_CONTRACT_ADDRESS_MAINNET,
        functionName: 'allowance',
        args: [address, CONTRACT_ADDRESS_LONG_POSITION],
    });

    // TO DO: refactor
    const approveUSDC = async () => {
        if (chain?.id !== 8888) {
            switchChain({ chainId: 8888 }); // Xanachain custom chain
        }

        const approveHash = await writeContractAsync({
            abi: USDC_ERC20_ABI,
            address: USDC_CONTRACT_ADDRESS_MAINNET,
            functionName: 'approve',
            args: [CONTRACT_ADDRESS_LONG_POSITION, parseUnits(longAmount, 6)],
        });

        toast.dismiss();
        const txReceipt = await waitForTransactionReceipt(config, { hash: approveHash });

        console.log('Approve USDC:', txReceipt.transactionHash);
        toast.success('USDC Approved!');
    };

    const openLongPosition = async () => {
        toast.dismiss();
        if (chain?.id !== 8888) {
            switchChain({ chainId: 8888 }); // Xanachain custom chain
        }

        if (longAmount && borrowAmount) {
            const openPosisitionHash = await writeContractAsync({
                address: CONTRACT_ADDRESS_LONG_POSITION,
                abi: CONTRACT_ABI_LONG_POSITION,
                functionName: 'openLeverage',
                args: [nftId, parseUnits(longAmount, 6), parseUnits(borrowAmount, 6), slippage],
            });

            toast.dismiss();
            const txReceipt = await waitForTransactionReceipt(config, { hash: openPosisitionHash });

            console.log('Position opened:', txReceipt.transactionHash);
            toast.success('Long position opened!');
        }
    };

    const openShortPosition = async () => {
        if (chain?.id !== 421614) {
            switchChain({ chainId: 421614 }); // Arb Sepolia chain
        }

        if (shortAmount && shortLeverage) {
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
    // TO DO: refactor
    const handleCreatePosition = async () => {
        if (!isConnected) {
            open();
            return;
        }

        try {
            // setIsLoading(true);

            // Step 1: Switch to Xanachain (8888)
            if (chain?.id !== 8888) {
                toast.loading('Switching to Xanachain...');
                switchChain({ chainId: 8888 });
                setTimeout(() => {
                    toast.dismiss();
                }, 1000);
            }

            console.log(
                Number(allowance),
                Number(parseUnits(longAmount, 6)),
                Number(allowance) < Number(parseUnits(longAmount, 6)),
            );
            // Step 2: Approve USDC
            if (
                Number(allowance) < Number(parseUnits(longAmount, 6)) ||
                (Number(allowance) === 0 && Number(longAmount) > 0)
            ) {
                toast.loading('Approving USDC...');
                await approveUSDC();
            }

            // Step 3: Open Long Position
            await openLongPosition();

            // Step 4: Open Short Position
            await openShortPosition();
        } catch (error) {
            console.error('Error creating position:', error);
        }
    };

    return (
        <>
            <TotalPosition />

            <div className="flex flex-col items-center md:items-stretch md:flex-row gap-4 md:w-full max-w-4xl w-screen">
                <LongPosition />
                <ShortPosition />
            </div>

            {isConnected ? (
                <div className="flex gap-4">
                    <Button
                        onClick={handleCreatePosition}
                        isLoading={isPending || isLoading || isShortPositionLoading}
                        disabled={isShortPositionLoading}
                    >
                        {isPending
                            ? 'Please confirm in your wallet...'
                            : isLoading
                              ? 'Submitting...'
                              : 'Submit Deposit'}
                    </Button>
                </div>
            ) : (
                <Button className="w-1/3" onClick={() => open()}>
                    Connect Wallet
                </Button>
            )}
        </>
    );
};
