import style from './index.module.scss';

export const MainPageLoader = () => {
    return (
        <div className="flex justify-center items-center flex-grow">
            <div className={style.loader}>
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className={`${style.box} ${style[`box${index}`]}`}>
                        <div></div>
                    </div>
                ))}
                <div className={style.ground}>
                    <div></div>
                </div>
            </div>
        </div>
    );
};
