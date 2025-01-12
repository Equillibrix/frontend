'use client';

import { Button } from '@/shared/ui/button';
import { Card, Tooltip } from '@nextui-org/react';
import { MyPositionCard } from '@/widgets/MyPositionCard/MyPositionCard';
import { useRouter } from 'next/navigation';

const totalSupply = 100;
const totalBorrow = 75;
const totalValue = 100;

const data = [
    { id: 1, label: 'Your Total Supply', value: totalSupply },
    { id: 2, label: 'Total Value', value: totalValue },
    { id: 3, label: 'Your Total Borrow', value: totalBorrow },
];

export const DepositWithLoopingCard = () => {
    const isPositionsExist = false;
    const router = useRouter();

    const handleManage = () => {
        console.log('Manage position');
    };

    return (
        <div className="flex flex-col gap-1 w-full overflow-auto px-24">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {data.map((item) => (
                    <Card key={item.id} className="bg-card-dark/60 p-6 backdrop-blur-md">
                        <div className="flex items-center gap-4">
                            <div>
                                <p className="text-gray-400">{item.label}</p>
                                <p className="text-2xl font-bold text-white">${item.value}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Positions Section */}
            <div className="bg-card-dark/40 rounded-xl p-6 backdrop-blur-md">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        {/* <Star className="w-6 h-6 text-white" /> */}
                        <h2 className="text-xl font-semibold text-white">My Positions</h2>
                    </div>
                    <Button onClick={() => router.push('/create')}>Create Position</Button>
                </div>
            </div>

            {isPositionsExist ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    <MyPositionCard
                        id="1460"
                        token1="ETH"
                        token2="USDT"
                        collateral={336.88}
                        debt={50.1}
                        supplyAPY={1.62}
                        borrowAPY={10.55}
                        ratio={14.84}
                        maxRatio={90}
                        onManage={handleManage}
                    />
                </div>
            ) : (
                <div className="bg-[rgb(31,33,45)] bg-opacity-100 p-4 backdrop-blur-md flex items-center justify-center py-12 rounded-xl">
                    <p className="text-gray-400">No positions found</p>
                </div>
            )}
        </div>
    );
};
