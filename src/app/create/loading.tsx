import { Spinner } from '@nextui-org/react';

export default function Loading() {
    return (
        <div className="flex max-h-screen flex-grow items-center justify-center gap-2">
            <Spinner size="lg" />
            <span>Loading...</span>
        </div>
    );
}
