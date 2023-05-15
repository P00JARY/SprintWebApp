import React from "react";
import { Route, Switch } from "react-router-dom";


const Routes = ({
    PrivateRoute,
    routes,
    auth /* Its Only Use For Now,I Handle It With ReduxStore */
}) => {
    const RoutesMap = routes.map(
        ({
            Private,
            exact = true,
            Layout = ({ children }) => <>{children}</>,
            modules,
            Component,
            path
        }) => {
            const ComponentWithLayout = () => {
                return (
                    <Layout>
                        <Component />
                    </Layout>
                );
            };
            return Private
                ? [
                    <PrivateRoute
                        key={path}
                        exact={exact}
                        component={ComponentWithLayout}
                        path={path}
                        auth={auth}
                    />,
                    modules &&
                    modules.map((childrenProps) => (
                        <PrivateRoute
                            key={childrenProps.path}
                            exact={childrenProps.exact}
                            component={() => (
                                <Layout>
                                    <childrenProps.Component />
                                </Layout>
                            )}
                            path={path + childrenProps.path}
                            auth={auth}
                        />
                    ))
                ]
                : [
                    <Route
                        key={path}
                        exact={exact}
                        component={ComponentWithLayout}
                        path={path}
                    />,
                    modules &&
                    modules.map((childrenProps) => (
                        <Route
                            key={childrenProps.path}
                            exact={childrenProps.exact}
                            component={() => (
                                <Layout>
                                    <childrenProps.Component />
                                </Layout>
                            )}
                            path={path + childrenProps.path}
                        />
                    ))
                ];
        }
    );
    return <Switch> {RoutesMap}</Switch>;
};
export default Routes;
