import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';


interface NotFoundPageProps {
    className?: string,
}

const NotFoundPage: FC<NotFoundPageProps> = (props) => {
    const {className} = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Cтраница не найдена')}
        </div>
    );
};

export default NotFoundPage;