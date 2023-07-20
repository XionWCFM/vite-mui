import '@/styles/reset.css';
import '@/styles/index.css';
import '@/styles/animation.css';

import Providers from './components/helper-components/Providers.tsx';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import CssBaseline from '@mui/material/CssBaseline';
import ErrorFallback from './components/error-loading-components/ErrorFallback.tsx';

import { ErrorBoundary } from 'react-error-boundary';
import { worker } from './server/worker.ts';
import React from 'react';
import LoadingPage from './components/error-loading-components/LoadingPage.tsx';
import { Provider } from 'jotai';

if (process.env.NODE_ENV === 'development') {
  void worker.start();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider>
    <ErrorBoundary fallbackRender={ErrorFallback}>
      <React.Suspense fallback={<LoadingPage />}>
        <Providers>
          <CssBaseline />
          <App />
        </Providers>
      </React.Suspense>
    </ErrorBoundary>
  </Provider>,
);
