import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { RouterProps } from 'src/routes/config';
import { AppState } from 'src/store/reducers';

interface PrivateRouteProps extends RouterProps {
  component: any;
  state?: any;
}

const PrivateRoute: FC<PrivateRouteProps> = (props) => {
  const { component: Component, path } = props;
  const { isAuth } = useSelector((state: AppState) => state.auth);
  const location = useLocation();

  return (
    <Route
      path={path}
      element={isAuth ? <Component /> : <Redirect to="/sign-in" state={{ from: location }} />}
    />
  );
};

export default PrivateRoute;
