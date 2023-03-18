import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './containers/App';
import 'common/styles/style.scss';

const container = document.getElementById('app');
const root = createRoot(container!);

// console.log('node env: ', process.env.Node_ENV)

root.render(<App />);
