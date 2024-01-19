import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import {classNames} from 'shared/lib/classNames/classNames';
import AppLink, {AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string,
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.mainLink}>
                    Главная
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                >
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};

export default Navbar;