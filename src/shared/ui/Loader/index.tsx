import style from './index.module.scss';

export const Loader = () => {
    return (
        <div className="flex justify-center items-center flex-grow">
            <div className={style.loader}></div>
        </div>
    );
};
