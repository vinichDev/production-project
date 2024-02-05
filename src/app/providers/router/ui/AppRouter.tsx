import { Suspense } from 'react';
import {
    Route,
    Routes
} from 'react-router-dom';
import PageLoader from 'widgets/PageLoader/ui/PageLoader';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routeConfig.map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <div className="page-wrapper">
                                {element}
                            </div>
                        }
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;