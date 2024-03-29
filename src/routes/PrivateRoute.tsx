import { useEffect, useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';
import { RouterProps } from 'src/routes/config';

// layout
import WrappedLayoutSecurity from 'src/layouts/LayoutSecurity';

// types
import { IParentMenu } from 'src/models/layout.types';

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
  const [currentMenus] = useState<IParentMenu[]>([]);

  useEffect(() => {
    if (!isAuth) {
      navigate('/sign-in', { replace: true });
    }
  }, [isAuth]);

  return isAuth ? (
    <Route
      key={key}
      path={path}
      element={
        <WrappedLayoutSecurity menus={currentMenus}>
          <Component />
        </WrappedLayoutSecurity>
      }
    />
  ) : null;
};

export default PrivateRoute;
