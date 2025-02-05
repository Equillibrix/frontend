import { Slider } from '@nextui-org/react';
import { MARKS } from './_constants';
import { useStore } from '@/shared/hooks/useStore';

export const SliderAmount = () => {
    const { setLeverage, leverage } = useStore();

    const handleChange = (value: number | number[]) => {
        if (typeof value === 'number') {
            setLeverage(value);
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
            defaultValue={leverage}
            marks={MARKS}
            onChange={handleChange}
        />
    );
};
