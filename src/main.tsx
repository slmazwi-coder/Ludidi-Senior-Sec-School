import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// ── Data version reset ──────────────────────────────────────────────────────
const DATA_VERSION = 'ramafole-v1';
if (localStorage.getItem('data_version') !== DATA_VERSION) {
  Object.keys(localStorage)
    .filter(k => k.startsWith('admin_') || k.startsWith('mh_') || k.startsWith('lupindo_') || k.startsWith('ramafole_'))
    .forEach(k => localStorage.removeItem(k));
  localStorage.setItem('data_version', DATA_VERSION);
}
// ────────────────────────────────────────────────────────────────────────────

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
