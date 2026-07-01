import React from 'react';
import Layout from './Layout';
import Home from './pages/index';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiesPolicy from './pages/CookiesPolicy';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'polityka-prywatnosci',
        element: <PrivacyPolicy />,
      },
      {
        path: 'polityka-cookies',
        element: <CookiesPolicy />,
      },
    ],
  },
];

export default routes;
