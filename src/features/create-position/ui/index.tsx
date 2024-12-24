'use client';

import { Link } from '@nextui-org/react';
import { CreatePositionCard } from '@/widgets/CreatePositionCard';
import { BackButton, Loader } from '@/shared/ui';
import { useEffect, useState } from 'react';

export const CreatePosition = () => {
    //TODO: delete -> imitation for visual testing
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loader />;
    }
    return (
        <div className="flex flex-col items-center w-full overflow-auto gap-4 pb-6">
            <div className="self-start">
                <BackButton href="/" as={Link} />
            </div>

            <CreatePositionCard />
        </div>
    );
};
