import { lazy } from 'react';

// pages
const Home = lazy(() => import('src/pages/Home'));
const NotFoundPage = lazy(() => import('src/pages/NotFound'));

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
  },
  {
    path: '*',
    component: NotFoundPage,
    isPrivate: false
  }
];

export default ROUTERS;
