import { useEffect } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';
import { RouterProps } from 'src/routes/config';

interface PrivateRouteProps extends RouterProps {
  state?: any;
}

/**
 * PrivateRoute component for handling private routes.
 *
 * @param {PrivateRouteProps} props - the props for the PrivateRoute component
 * @return {JSX.Element} The Route component or null
 */
const PrivateRoute = (props: PrivateRouteProps) => {
  const { key, path, component: Component } = props;
  const isAuth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/sign-in', { replace: true });
    }
  }, [isAuth]);

  return isAuth ? <Route key={key} path={path} element={<Component />} /> : null;
};

export default PrivateRoute;
