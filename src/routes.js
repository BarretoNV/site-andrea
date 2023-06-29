import React from 'react';
import {
  useRoutes
} from 'react-router-dom';

import Home from './pages/home';

export default function App() {
  let element = useRoutes([
    {path: '/', element: <Home />},
  ]);

  return element;
}