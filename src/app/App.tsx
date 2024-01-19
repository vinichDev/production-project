import './styles/index.scss';
import {Suspense} from 'react';
import {AppRouter} from 'app/providers/router';
import {useTheme} from 'app/providers/ThemeProvider';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar';
import {classNames} from 'shared/lib/classNames/classNames';

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar/>
                <div className={classNames('content-page')}>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;