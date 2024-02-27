import { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { RouterProps } from 'src/routes/config';

interface PrivateRouteProps extends RouterProps {
  component: any;
  state?: any;
}

const PrivateRoute: FC<PrivateRouteProps> = (props) => {
  const { component: Component, path } = props;
  const isAuth = false;

  return <Route path={path} element={isAuth ? <Component /> : <Redirect to="/sign-in" />} />;

  // return (
  // <Route
  //   {...rest}
  //   render={(routeProps) => {
  //     if (isAuthenticated) {
  //       <WrappedPrivateLayout menus={currentMenus}>
  //         <Component {...routeProps} privateState={privateState} />
  //       </WrappedPrivateLayout>;
  //     }

  //     return (
  //       <Redirect
  //         to={{
  //           pathname: '/sign-in',
  //           state: { from: routeProps.location }
  //         }}
  //       />
  //     );
  //   }}
  // />

  // <Route {...rest} render={() => (auth ? <Component /> : <Redirect to="/login" />)} />
  // );
};

export default PrivateRoute;
