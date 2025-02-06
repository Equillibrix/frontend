import { Slider } from '@nextui-org/react';
import { MARKS } from './_constants';
import { useStore } from '@/shared/hooks/useStore';

export const SliderAmount = () => {
    const { shortLeverage, setShortLeverage } = useStore();

    const handleChange = (value: number | number[]) => {
        if (typeof value === 'number') {
            setShortLeverage(value);
        }
    };

    return (
        <Slider
            label="Leverage"
            step={0.1}
            size="sm"
            showTooltip={true}
            formatOptions={{ style: 'decimal' }}
            getValue={(value) => `${value}x`}
            maxValue={13}
            minValue={1}
            defaultValue={shortLeverage}
            className="max-w-md"
            marks={MARKS}
            onChange={handleChange}
        />
    );
};
