import Image from 'next/image';
import EthIcon from '/public/eth.webp';
import UsdtIcon from '/public/usdt.webp';

export enum Platform {
    FLUID = 'fluid',
    HYPERLIQUID = 'Hyperliquid',
}

type Props = {
    chain?: string;
    platform: Platform;
};

export const TitleAmount = ({ chain, platform }: Props) => {
    return (
        <div className="flex items-center text-lg">
            <Image
                width={36}
                height={36}
                src={EthIcon}
                alt="ether"
                className="rounded-full overflow-hidden max-w-full h-auto"
            />
            <Image
                width={36}
                height={36}
                src={UsdtIcon}
                alt="usdt"
                className="mr-2 -ml-2 rounded-full overflow-hidden max-w-full h-auto"
            />
            <div className="flex flex-col gap-1">
                <span className="whitespace-nowrap">ETH/USDC on {platform}</span>
                {chain && (
                    <div className="flex gap-2 items-center text-sm">
                        <span>{chain}</span>
                        <Image
                            width={16}
                            height={16}
                            src={EthIcon}
                            alt="ether"
                            className="max-w-full h-auto"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
