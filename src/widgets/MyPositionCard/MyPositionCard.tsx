import React, { useState } from "react";
import { Card, Button, Progress, Tooltip, Tabs, Tab, Input, Slider } from "@nextui-org/react";
import Image from 'next/image';
import EthIcon from '/public/eth.webp';
import UsdtIcon from '/public/usdt.webp';

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

    const handleSliderChange = (value: number | number[]) => {
        setSliderValue(typeof value === "number" ? value : value[0]);
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
                    <div className="pt-4 space-y-4">
                        <Input
                            type="number"
                            label="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="text-white"
                        />
                        <div>
                            <p className="text-gray-400 mb-2">Leverage (%)</p>
                            <Slider 
                                value={sliderValue}
                                onChange={handleSliderChange}
                                minValue={0}
                                maxValue={100}
                                step={1}
                                className="max-w-md"
                                classNames={{
                                    base: "max-w-full",
                                    track: "bg-gray-700",
                                    filler: "bg-blue-600",
                                    thumb: "bg-white"
                                }}
                            />
                            <div className="flex justify-between mt-1">
                                <span className="text-gray-400">0%</span>
                                <span className="text-gray-400">100%</span>
                            </div>
                        </div>
                        <Button className="w-full bg-blue-600 text-white">
                            Confirm Add
                        </Button>
                    </div>
                </Tab>
                <Tab key="withdraw" title="Withdraw">
                    <div className="pt-4 space-y-4">
                        <Input
                            type="number"
                            label="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="text-white"
                        />
                        <div>
                            <p className="text-gray-400 mb-2">Withdraw (%)</p>
                            <Slider 
                                value={sliderValue}
                                onChange={handleSliderChange}
                                minValue={0}
                                maxValue={100}
                                step={1}
                                className="max-w-md"
                                classNames={{
                                    base: "max-w-full",
                                    track: "bg-gray-700",
                                    filler: "bg-blue-600",
                                    thumb: "bg-white"
                                }}
                            />
                            <div className="flex justify-between mt-1">
                                <span className="text-gray-400">0%</span>
                                <span className="text-gray-400">100%</span>
                            </div>
                        </div>
                        <Button className="w-full bg-blue-600 text-white">
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
                        <span className="text-gray-400">Ratio</span>
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
