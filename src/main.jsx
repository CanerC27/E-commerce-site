import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ShopProvider } from './context/ShopContext';
import { LanguageProvider } from './i18n/LanguageContext';
import './styles/index.css';

const routerFuture = {
  v7_startTransition: true,
  v7_relativeSplatPath: true,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter future={routerFuture}>
      <LanguageProvider>
        <ShopProvider>
          <App />
        </ShopProvider>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
