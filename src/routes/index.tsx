import { FC, Suspense } from 'react';
import { Switch } from 'react-router-dom';

// layout
import PrivateRoute from 'src/routes/PrivateRoute';
import PublicRoute from 'src/routes/PublicRoute';

// config
import ROUTERS, { RouterProps } from 'src/routes/config';

const RouteWithSubRouters: FC<RouterProps> = (props) => {
  const { path, component, isPrivate, ...rest } = props;

  if (isPrivate) {
    return <PrivateRoute isPrivate={isPrivate} path={path} component={component} {...rest} />;
  }

  return <PublicRoute isPrivate={isPrivate} path={path} component={component} />;
};

const RenderRouter = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <Switch>
        {ROUTERS.map((el, key) => (
          <RouteWithSubRouters {...el} key={key} />
        ))}
      </Switch>
    </Suspense>
  );
};

export default RenderRouter;
