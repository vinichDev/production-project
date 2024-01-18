import {FC, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import Button from "shared/ui/Button/Button";
import LangSwitcher from "./LangSwitcher/LangSwitcher";


interface SidebarProps {
    className?: string,
}

const Sidebar: FC<SidebarProps> = (props) => {
    const {className} = props;

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button onClick={onToggle}>{'->'}</Button>
            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};

export default Sidebar;