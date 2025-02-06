import { Card } from './_components/Card';

type Props = {
    title?: string;
    items: { label: string; value: string | number }[];
};

export const GeneralInfoCard = ({ title, items }: Props) => (
    <div className="flex flex-col gap-2">
        {title && <span className="text-lg text-bold text-fontColor-0 mb-1">{title}</span>}
        {items.map((item) => (
            <Card key={item.label} label={item.label} value={item.value} />
        ))}
    </div>
);
