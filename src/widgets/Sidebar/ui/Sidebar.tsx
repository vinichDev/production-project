import {FC, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import ThemeSwitcher from "shared/ui/ThemeSwitcher/ThemeSwitcher";


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
            <button onClick={onToggle}>{'->'}</button>
            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher/>
                {/*<LangSwitcher/>*/}
            </div>
        </div>
    );
};

export default Sidebar;