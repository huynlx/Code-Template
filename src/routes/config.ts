import Home from 'src/pages/Home';

export interface RouterProps {
  path: string;
  component: any;
  isPrivate: boolean;
}

const ROUTERS: RouterProps[] = [
  {
    path: '/home',
    component: Home,
    isPrivate: true
  }
];

export default ROUTERS;
