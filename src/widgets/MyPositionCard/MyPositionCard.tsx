import React, { useState } from "react";
import { Card, Button, Progress, Tooltip, Tabs, Tab, Input, Slider } from "@nextui-org/react";
import Image from 'next/image';
import EthIcon from '/public/eth.webp';
import UsdtIcon from '/public/usdt.webp';
import { InputAmount } from "../CreatePositionCard/_components/InputAmount";
import {
    useAccount,
    useReadContract,
    useSwitchChain,
    useWaitForTransactionReceipt,
    useWriteContract,
} from 'wagmi';
import { useAppKit } from '@reown/appkit/react';
import { useStore } from '@/shared/hooks/useStore';
import toast from "react-hot-toast";
import {
    CONTRACT_ABI_LONG_POSITION,
    CONTRACT_ADDRESS_LONG_POSITION,
    USDC_CONTRACT_ADDRESS_MAINNET,
    USDC_ERC20_ABI,
} from '@/shared/config/contracts';
import { config } from '@/app/config';
import { parseUnits } from 'viem';
import { waitForTransactionReceipt } from '@wagmi/core';
import useOpenShortPosition from '@/shared/hooks/useOpenShortPosition';


interface MyPositionCardProps {
    id: string;
    token1: string;
    token2: string;
    collateral: number;
    debt: number;
    supplyAPY: number;
    borrowAPY: number;
    ratio: number;
    maxRatio: number;
    onManage?: () => void;
}

export const MyPositionCard: React.FC<MyPositionCardProps> = ({
    id,
    token1,
    token2,
    collateral,
    debt,
    supplyAPY,
    borrowAPY,
    ratio,
    maxRatio,
    onManage
}) => {
    const [isManaging, setIsManaging] = useState(false);
    const [selectedTab, setSelectedTab] = useState("add");
    const [amount, setAmount] = useState("");
    const [sliderValue, setSliderValue] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    // функции для добавления позиции
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
        console.log('approveHash', approveHash);
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
            console.log('openPosisitionHash', openPosisitionHash);
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


    const handleConfirmAdd = async () => {
        try {
            setIsLoading(true);
            // Здесь будет логика добавления позиции
            handleCreatePosition();
            
            // После успешного добавления
            setIsManaging(false);
            setAmount("");
            setSliderValue(0);
        } catch (error) {
            console.error("Error adding to position:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleConfirmWithdraw = async () => {
        if (!isConnected) {
            open();
            return;
        }

        try {
            setIsLoading(true);

            // Переключаемся на нужную сеть
            if (chain?.id !== 8888) {
                toast.loading('Switching to Xanachain...');
                switchChain({ chainId: 8888 });
                setTimeout(() => {
                    toast.dismiss();
                }, 1000);
            }

            // Вычисляем сумму вывода на основе процента sliderValue
            const withdrawAmount = (collateral * sliderValue / 100).toFixed(6);
            const withdrawDebt = (debt * sliderValue / 100).toFixed(6);

            // Вызываем depositAndBorrow с отрицательными значениями для вывода
            const withdrawHash = await writeContractAsync({
                address: CONTRACT_ADDRESS_LONG_POSITION,
                abi: CONTRACT_ABI_LONG_POSITION,
                functionName: 'depositAndBorrow',
                args: [
                    BigInt(id), // nftId
                    parseUnits((-withdrawAmount).toString(), 6), // отрицательный newCol для вывода
                    parseUnits((-withdrawDebt).toString(), 6), // отрицательный newDebt для вывода
                    address // адрес получателя
                ]
            });

            toast.loading('Withdrawing funds...');
            const txReceipt = await waitForTransactionReceipt(config, { hash: withdrawHash });
            
            console.log('Withdrawal successful:', txReceipt.transactionHash);
            toast.success('Funds withdrawn successfully!');
            
            // После успешного вывода
            setIsManaging(false);
            setAmount("");
            setSliderValue(0);
        } catch (error) {
            console.error("Error withdrawing from position:", error);
            toast.error('Failed to withdraw funds');
        } finally {
            setIsLoading(false);
            toast.dismiss();
        }
    };

    const handleManageClick = () => {
        setIsManaging(true);
        if (onManage) onManage();
    };

    const renderManageContent = () => (
        <div className="space-y-4">
            <Tabs 
                selectedKey={selectedTab} 
                onSelectionChange={(key) => setSelectedTab(key.toString())}
                variant="bordered"
                classNames={{
                    tabList: "bg-[rgb(41,43,55)] rounded-lg p-1",
                    cursor: "bg-[rgb(51,53,65)]",
                    tab: "text-white",
                    tabContent: "group-data-[selected=true]:text-white"
                }}
            >
                <Tab key="add" title="Add Position">
                    <div className="space-y-4">
                        <InputAmount />
                        
                        <Button 
                            className="w-full bg-blue-600 text-white"
                            onClick={handleConfirmAdd}
                            isLoading={isLoading}
                        >
                            Confirm Add
                        </Button>
                    </div>
                </Tab>
                <Tab key="withdraw" title="Withdraw">
                    <div className="space-y-4">
                        <InputAmount />
                       
                        <Button 
                            className="w-full bg-blue-600 text-white"
                            onClick={handleConfirmWithdraw}
                            isLoading={isLoading}
                        >
                            Confirm Withdraw
                        </Button>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );

    return (
        <Card className="bg-[rgb(31,33,45)] bg-opacity-100 p-4 backdrop-blur-md">
            <div className="space-y-4">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Image 
                            width={36}
                            height={36}
                            src={EthIcon}
                            alt="ether"
                            className="rounded-full overflow-hidden max-w-full h-auto"/>
                        <Image 
                            width={36}
                            height={36}
                            src={UsdtIcon}
                            alt="usdt"
                            className="mr-2 -ml-2 rounded-full overflow-hidden max-w-full h-auto"/>
                        <span className="text-white font-medium">
                            {token1} / {token2}
                        </span>
                    </div>
                </div>

                {/* Stats */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400">Collateral</span>
                        <div className="flex items-center gap-1">
                            <span className="text-white">${collateral.toFixed(2)}</span>
                            <Tooltip content="Total collateral value">
                                <Button isIconOnly variant="light" size="sm" className="text-gray-400">
                                    ?
                                </Button>
                            </Tooltip>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400">Debt</span>
                        <div className="flex items-center gap-1">
                            <span className="text-white">${debt.toFixed(1)}</span>
                            <Tooltip content="Currenct debt">
                                <Button isIconOnly variant="light" size="sm" className="text-gray-400">
                                    ?
                                </Button>
                            </Tooltip>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400">Supply APY</span>
                        <span className="text-white">{supplyAPY.toFixed(2)}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400">Borrow APY</span>
                        <span className="text-white">{borrowAPY.toFixed(2)}%</span>
                    </div>
                </div>

                {/* Ratio */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400">Liquidation Ratio</span>
                        <span className="text-white">{ratio.toFixed(2)}%</span>
                        <span className="text-gray-400">MAX {maxRatio}%</span>
                    </div>
                    <Progress value={(ratio / maxRatio) * 100} className="h-2" color="success" />
                </div>

                {!isManaging ? (
                    <Button className="w-full bg-blue-600 text-white" onClick={handleManageClick}>
                        Manage
                    </Button>
                ) : (
                    renderManageContent()
                )}
            </div>
        </Card>
    );
};
