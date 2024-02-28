import { lazy } from 'react';

// pages
const HomePage = lazy(() => import('src/pages/Home'));
const NotFoundPage = lazy(() => import('src/pages/NotFound'));
const SignInPage = lazy(() => import('src/pages/Sign-In'));

export interface RouterProps {
  key?: number;
  path: string;
  component: any;
  isPrivate: boolean;
  children?: RouterProps[];
}

const ROUTERS: RouterProps[] = [
  {
    path: '/',
    component: HomePage,
    isPrivate: false,
    children: []
  },
  {
    path: '/sign-in',
    component: SignInPage,
    isPrivate: false,
    children: []
  },
  {
    path: '*',
    component: NotFoundPage,
    isPrivate: false
  }
];

export default ROUTERS;
