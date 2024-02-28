import { Route } from 'react-router-dom';

// config
import { RouterProps } from 'src/routes/config';

/**
 * Creates a public route with the specified key, path, and component.
 *
 * @param {RouterProps} props - The props for the route.
 * @return {JSX.Element} The route element.
 */
const PublicRoute = (props: RouterProps) => {
  const { key, path, component: Component } = props;

  return <Route key={key} path={path} element={<Component />} />;
};

export default PublicRoute;
