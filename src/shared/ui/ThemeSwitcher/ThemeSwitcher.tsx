import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import Button from "shared/ui/Button/Button";


interface ThemeSwitcherProps {
    className?: string,
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const {className} = props;

    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
        </Button>
    );
};

export default ThemeSwitcher;