import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';


interface PageLoaderProps {
    className?: string,
}

const Loader: FC<PageLoaderProps> = (props) => {
    const {className} = props;
    return (
        <div className={classNames('lds-ellipsis', {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;