import { FC } from 'react';
import { Route } from 'react-router-dom';

// config
import { RouterProps } from 'src/routes/config';

const PublicRoute: FC<RouterProps> = (props) => {
  const { path, component: Component } = props;

  return <Route path={path} element={Component} />;
};

export default PublicRoute;
