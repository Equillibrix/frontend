import Image from 'next/image';
import LogoEqlbrx from '/public/LogoEqlbrx.png';

export const Header = () => {
    return (
        <header className="flex w-full p-4 items-center justify-between">
            <div className="h-12 ml-16">
                <Image 
                    src={LogoEqlbrx}
                    alt="Equilibrix Logo"
                    width={150}
                    height={48}
                    priority
                    className="object-contain"
                />
            </div>
            <div className="h-8">
                <appkit-account-button />
            </div>
        </header>
    );
};
