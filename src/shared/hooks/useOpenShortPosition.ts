import ccxt from 'ccxt';
import { useTransferUSDC } from './useTransferUSDC';
import { WriteContractMutate } from 'wagmi/query';
import { Config } from 'wagmi';

interface IProps {
    shortAmount: string;
    shortLeverage: number;
    address: `0x${string}` | undefined;
    setIsShortPositionLoading: (arg0: boolean) => void;
    hyperliquidAddress: string;
    writeContract: WriteContractMutate<Config, unknown>;
}

const useOpenShortPosition = async ({
    shortAmount,
    shortLeverage,
    address,
    setIsShortPositionLoading,
    hyperliquidAddress,
    writeContract,
}: IProps) => {
    if (!address) return;

    const { handleTransfer } = useTransferUSDC();

    try {
        setIsShortPositionLoading(true);

        await handleTransfer({
            amount: shortAmount,
            address,
            hyperliquidAddress,
            writeContract,
        });

        const exchange = new ccxt.hyperliquid();
        exchange.walletAddress = hyperliquidAddress;
        exchange.privateKey = process.env.NEXT_PUBLIC_API_PRIVATE_KEY!;

        exchange.setSandboxMode(true);

        const symbol = 'ETH/USDC:USDC';
        const side = 'sell';
        const amountInUSD = parseFloat(shortAmount);

        const params = {
            leverage: shortLeverage.toString(),
        };

        await exchange.setMarginMode('isolated', symbol, params);

        const ticker = await exchange.fetchTicker(symbol);
        const price = ticker.last || 1;

        const amountInETH = amountInUSD / price;

        const orderParams = {
            side: side,
            symbol: symbol,
            type: 'market',
            amount: amountInETH,
            price: price,
            params: {
                leverage: shortLeverage.toString(),
                timeInForce: 'Gtc',
            },
        };

        const order = await exchange.createOrder(
            orderParams.symbol,
            orderParams.type,
            orderParams.side,
            orderParams.amount,
            orderParams.price,
            orderParams.params,
        );

        console.log('Ордер успешно открыт', order);
    } catch (error) {
        console.error('Error creating position:', error);
    } finally {
        setIsShortPositionLoading(false);
    }
};

export default useOpenShortPosition;
