import { Suspense } from 'react';
import { Routes } from 'react-router-dom';

// layout
import PrivateRoute from 'src/routes/PrivateRoute';
import PublicRoute from 'src/routes/PublicRoute';

// config
import ROUTERS, { RouterProps } from 'src/routes/config';

/**
 * RouteWithSubRouters function to conditionally render private or public route.
 *
 * @param {RouterProps} props - the router props
 * @param {number} key - the key for the route
 * @return {ReactElement} the rendered route component
 */
const RouteWithSubRouters = (props: RouterProps, key: number) => {
  const { isPrivate } = props;

  if (isPrivate) {
    return PrivateRoute({ ...props, key });
  }

  return PublicRoute({ ...props, key });
};

/**
 * Renders the routers using lazy loading and a suspense fallback.
 *
 * @return {JSX.Element} The rendered routers.
 */
const RenderRouters = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <div id="layout-wrapper">
        <Routes>{ROUTERS.map((el, key) => RouteWithSubRouters(el, key))}</Routes>
      </div>
    </Suspense>
  );
};

export default RenderRouters;
