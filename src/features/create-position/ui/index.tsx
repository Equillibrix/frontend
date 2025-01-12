'use client';

import { CreatePositionCard } from '@/widgets/CreatePositionCard';
import { BackButton } from '@/shared/ui';
import { useRouter } from 'next/navigation';

export const CreatePosition = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center w-full overflow-auto gap-4 pb-6">
            <div className="self-start">
                <BackButton onClick={() => router.push('/')} className={`bg-opacity-0`} />
            </div>

            <CreatePositionCard />
        </div>
    );
};
