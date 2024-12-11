'use client';

import { Link } from '@nextui-org/react';
import { CreatePositionCard } from '@/widgets/CreatePositionCard';
import { BackButton } from '@/shared/ui';

export const CreatePosition = () => {
    return (
        <div className="flex flex-col items-center w-full overflow-auto gap-4 pb-6">
            <div className="self-start">
                <BackButton href="/" as={Link} />
            </div>

            <CreatePositionCard />
        </div>
    );
};
