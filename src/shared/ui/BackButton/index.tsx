import { Button, ButtonProps } from '@nextui-org/react';
import { ArrowBackIcon } from './_components/ArrowBackIcon';

export const BackButton = ({
    as,
    href,
    className,
    ...props
}: React.PropsWithChildren<ButtonProps>) => {
    return (
        <Button className={className} as={as} href={href} {...props}>
            <ArrowBackIcon />
            <span className="text-base">Back</span>
        </Button>
    );
};
