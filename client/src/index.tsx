import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { RecoilRoot } from 'recoil';
import { HelmetProvider } from 'react-helmet-async';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HelmetProvider>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </HelmetProvider>
);

serviceWorkerRegistration.register({});

reportWebVitals();
