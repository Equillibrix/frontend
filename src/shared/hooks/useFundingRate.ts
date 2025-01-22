import { useState, useEffect } from 'react';

export interface FundingRate {
    timestamp: number;
    rate: number;
}

export const useFundingRate = () => {
    const [averageRate, setAverageRate] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFundingRates = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch('https://api.hyperliquid.xyz/info', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        type: 'fundingHistory',
                        coin: 'ETH',
                        startTime: Date.now() - 3 * 30 * 24 * 60 * 60 * 1000,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch funding rates: ${response.statusText}`);
                }

                const data = await response.json();

                if (!Array.isArray(data)) {
                    throw new Error('Invalid API response format');
                }

                const rates = data.map((entry: any) => ({
                    timestamp: entry.time,
                    rate: parseFloat(entry.fundingRate),
                }));

                const average =
                    (rates.reduce((sum, entry) => sum + entry.rate, 0) * 100) / rates.length;

                setAverageRate(average);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFundingRates();
    }, []);

    return { averageRate, isLoading, error };
};
