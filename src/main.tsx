import Providers from './components/helper-components/Providers.tsx';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { worker } from './server/worker.ts';
import CssBaseline from '@mui/material/CssBaseline';

if (process.env.NODE_ENV === 'development') {
  void worker.start();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Providers>
    <CssBaseline />

    <App />
  </Providers>,
);
