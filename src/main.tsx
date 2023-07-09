import Providers from './components/helper-components/Providers.tsx';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { worker } from './server/worker.ts';

if (process.env.NODE_ENV === 'development') {
  void worker.start();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Providers>
    <App />
  </Providers>,
);
