'use client';

import { Button } from '@/shared/ui/button';
import { Card, Tooltip } from '@nextui-org/react';
import { Link } from '@nextui-org/react';
import { Star, Eye, TrendingUp, ArrowDownToLine, ArrowUpToLine, HelpCircle } from 'lucide-react';
import { CreatePositionCard } from '@/widgets/CreatePositionCard';
import { MyPositionCard } from '@/widgets/MyPositionCard/MyPositionCard';

const totalSupply = 100;
const totalBorrow = 75;
const totalValue = 100;

export const DepositWithLoopingCard = () => {
    const isPositionsExist = true;

    const handleManage = () => {
        console.log('Manage position');
    }

    const handleFavorite = () => {
        console.log('Toggle favorite');
    }

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Card className="bg-card-dark/60 p-6 backdrop-blur-md">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-green-500/10">
                            <ArrowDownToLine className="w-6 h-6 text-green-500" />
                        </div>
                        <div>
                            <p className="text-gray-400">Your Total Supply</p>
                            <p className="text-2xl font-bold text-white">${totalSupply}</p>
                        </div>
                    </div>
                </Card>
                <Card className="bg-card-dark/60 p-6 backdrop-blur-md">
                    <div className="flex items-center gap-4">
                        <div className="items-center">
                            <p className="text-gray-400">Total Value</p>
                            <p className="text-2xl font-bold text-white">${totalValue}</p>
                        </div>
                    </div>
                </Card>
                <Card className="bg-card-dark/60 p-6 backdrop-blur-md">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-red-500/10">
                            <ArrowUpToLine className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                            <p className="text-gray-400">Your Total Borrow</p>
                            <p className="text-2xl font-bold text-white">${totalBorrow}</p>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Positions Section */}
            <div className="bg-card-dark/40 rounded-xl p-6 backdrop-blur-md">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <Star className="w-6 h-6 text-white" />
                        <h2 className="text-xl font-semibold text-white">My Positions</h2>
                    </div>
                </div>
            </div>

            {isPositionsExist ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                        onManage={handleManage} />
                </div>
            ) : (
                <div className="flex items-center justify-center py-12">
                    <p className="text-gray-400">No positions found</p>
                </div>
            )}
           
            <Button href="/create" as={Link}>
                Create Position
            </Button>
        </div>
    );
};
