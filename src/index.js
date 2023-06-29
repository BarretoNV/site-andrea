import {createRoot} from 'react-dom/client';
import Routes from './routes';
import {BrowserRouter as Router} from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes />
  </Router>
);
