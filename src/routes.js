import React from 'react';
import {
  useRoutes
} from 'react-router-dom';

import Home from './pages/home';
import Address from './pages/address';
import Contact from './pages/contact';
import Guides from './pages/guides';
import OnlineHelp from './pages/onlineHelp';
import Presentations from './pages/presentations';
import Professional from './pages/professional';
import Shop from './pages/shop';
import Supervision from './pages/supervision';

export default function App() {
  let element = useRoutes([
    {path: '/', element: <Home />},
    {path: '/address', element: <Address />},
    {path: '/contact', element: <Contact />},
    {path: '/guides', element: <Guides />},
    {path: '/onlineHelp', element: <OnlineHelp />},
    {path: '/presentations', element: <Presentations />},
    {path: '/professional', element: <Professional />},
    {path: '/shop', element: <Shop />},
    {path: '/supervision', element: <Supervision />},
  ]);

  return element;
}