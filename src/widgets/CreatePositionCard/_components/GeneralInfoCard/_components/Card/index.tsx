type Props = {
    label: string;
    value: string | number;
};

export const Card = ({ label, value }: Props) => (
    <div className="flex justify-between w-full">
        <span className="text-fontColor-400">{label}</span>
        <span>{value}</span>
    </div>
);
