import { Spinner } from '@nextui-org/react';

export default function Loading() {
    return (
        <div>
            <Spinner size="lg" />
            <span>Loading...</span>
        </div>
    );
}
